const express = require("express")
const { reset } = require("nodemon")
const PostsModel = require("../Models/Posts-Model")
const router = express.Router()

//Post Contents
router.post("/", async (req, res) => {
    const posts = new PostsModel({
        authorId: req.body.authorId,
        author: req.body.author,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
    })

    try {
        const savePost = await posts.save()
        res.send(savePost)
    } catch (error) {
        res.send({ message: error })
    }
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
        const getPostById = await PostsModel.findOne(req.params.postId)
        res.send(getPostById)
    } catch (error) {
        res.send({ message: error })
    }
})

//Update a specific Post
router.patch("/update/:postId", async (req, res) => {
    try {
        const updatePost = await PostsModel.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    authorId: req.body.authorId,
                    author: req.body.author,
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
    try {
        const removePost = await PostsModel.remove({ _id: req.params.postId })
        res.send(removePost)
    } catch (error) {
        res.send({ message: error })
    }
})

module.exports = router
