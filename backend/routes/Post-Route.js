const express = require("express")
const mongose = require("mongoose")
const PostsModel = require("../Models/Posts-Model")
const User = require("../Models/SignUp")
const router = express.Router()


//Post Contents
router.post("/", async (req, res) => {
    const { title, category, description, image, user } = req.body

    let existingUser;

    try {
        existingUser = await User.findById(user)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user by this ID" })
    }

    const blogPost = new PostsModel({
        title,
        category,
        description,
        image,
        user
    })

    try {
        const session = await mongose.startSession()
        session.startTransaction()
        await blogPost.save({ session })
        existingUser.posts.push(blogPost) //I pushed the blog post to the "posts" array I ref in SiguP model
        await existingUser.save({ session })
        await session.commitTransaction()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    return res.status(200).json({ message: "Post added succesfully" })
})

//Get all Post
router.get("/", async (req, res) => {
    try {
        const getAllPost = await PostsModel.find()
        res.send(getAllPost)
    } catch (error) {
        res.send({ message: error })
    }
})

//Get a specific post
router.get("/:postId", async (req, res) => {
    try {
        const getPostById = await PostsModel.findOne(req.body.postId)
        res.send(getPostById)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

//Update a specific Post
router.patch("/update/:postId", async (req, res) => {
    try {
        const updatePost = await PostsModel.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    category: req.body.category,
                    description: req.body.description,
                    image: req.body.image,
                    user: req.body.user,
                }
            }
        )

        res.json(updatePost)
    } catch (error) {
        res.send({ message: error })
    }
})

//Delete Post
router.delete("/:postId", async (req, res) => {
    const _id = req.params.postId

    let blog;

    try {
        blog = await PostsModel.findByIdAndRemove(_id).populate("user")
        await blog.User.posts.pull(blog) // blog is not deleting from the popst array
        await blog.User.save()
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

    if (!blog) {
        return res.status(400).json({ message: "Unable to delete Post" })
    }
    return res.status(200).json({ message: "Post deleted Successfully" })


})

router.get("/user/:id", async (req, res) => {
    const userId = req.params.id

    let userBlogs;

    try {
        userBlogs = await User.findById(userId).populate("posts")
    } catch (error) {
        return console.log(error)
    }

    if (!userBlogs) {
        return res.status(404).json({ message: "No post founds" })
    } else {
        return res.status(200).json({ blogs: userBlogs })
    }

})

module.exports = router
