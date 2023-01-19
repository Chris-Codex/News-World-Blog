const express = require("express")
const router = express.Router();

const User = require("../Models/SignUp")
const bcrypt = require("bcryptjs")

router.post("/", async (req, res) => {
    const { email, password } = req.body
    const hashPassword = bcrypt.hashSync(password)
    const getUser = User({
        email,
        hashPassword
    })

    let checkIfUserexist;

    try {
        checkIfUserexist = await User.findOne({ email });
        if (!checkIfUserexist) {
            res.status(404).json({ message: "User not found" })
        } else {
            const checkIfPasswordExist = bcrypt.compareSync(password, checkIfUserexist.password)
            if (!checkIfPasswordExist) {
                res.status(404).json({ message: "Password not found" })
            } else {
                try {
                    return res.send(getUser)
                } catch (error) {
                    res.send({ message: error })
                }
                return res.status(200).json({ message: "User Logged In" })
            }
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router