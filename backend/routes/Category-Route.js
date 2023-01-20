const express = require("express")
const CategoryModel = require("../Models/Category-Model")
const router = express.Router()

router.post("/", async (req, res) => {
    const { name } = req.body

    const category = CategoryModel({
        name
    })

    try {
        const postCategory = await category.save()
        res.send(postCategory)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

router.get("/", async (req, res) => {
    try {
        const getCat = await CategoryModel.find()
        res.json(getCat)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

router.patch("/:catID", async (req, res) => {
    const id = req.params.catID

    try {
        const updateCategory = await CategoryModel.updateOne(
            { _id: id },
            {
                $set: { name: req.body.name }
            }
        )

        res.json(updateCategory)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

router.delete("/:catID", async (req, res) => {
    const id = req.body.catID

    try {
        const removeCategory = await CategoryModel.remove(id)
        res.json(removeCategory)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router