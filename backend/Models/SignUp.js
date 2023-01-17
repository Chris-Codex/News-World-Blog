const { default: mongoose } = require("mongoose")
const mongose = require("mongoose")

const SignUpSchema = mongose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        date: {
            type: String,
            default: Date.now
        }
    }
)

module.exports = mongose.model("Users", SignUpSchema)