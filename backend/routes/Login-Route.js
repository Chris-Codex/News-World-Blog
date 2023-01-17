const express = require("express")
const router = express.Router();

const User = require("../Models/SignUp")
const bcrypt = require("bcryptjs")

router.get("/", async (req, res) => {
    const getUser = User({
        email: req.body.email,
        password: req.body.password
    })

    let checkIfUserexist;
    const { email, password } = getUser
    try {
        checkIfUserexist = await User.findOne({ email });
        if (!checkIfUserexist) {
            res.status(404).json({ message: "User not found" })
        } else {
            const checkIfPasswordExist = bcrypt.compareSync(password, checkIfUserexist.password)
            if (!checkIfPasswordExist) {
                res.status(404).json({ message: "Password not found" })
            }

            try {
                res.send(getUser)
                res.send({ message: "User Logged In" })
            } catch (error) {
                res.send({ message: error })
            }
        }


    } catch (error) {

    }

})

module.exports = router