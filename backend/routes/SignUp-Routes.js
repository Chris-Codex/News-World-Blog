const express = require("express")
const User = require("../Models/SignUp")
const router = express.Router()

const bcrypt = require("bcryptjs")



//Get all Users
router.get("/users", async (req, res) => {

    let users;

    try {
        users = await User.find()
        res.send(users)
    } catch (error) {
        return res.send(400).json({ message: error.message })
    }

    if (!users) {
        return res.send(500).json({ message: "Users not Available" })
    }

})

router.post("/", async (req, res) => {
    const hashPasswword = bcrypt.hashSync(req.body.password)
    const user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashPasswword,
        Posts: []
    })

    const { email } = user

    let findExistingUser;

    try {
        findExistingUser = await User.findOne({ email })
    } catch (error) {
        console.log(error)
    }

    if (findExistingUser) {
        res.status(400).json({ message: "User already exist" })
    } else {
        try {
            const registerUser = await user.save()
            res.send(registerUser)
        } catch (error) {
            res.send({ message: error })
        }
    }

})

module.exports = router