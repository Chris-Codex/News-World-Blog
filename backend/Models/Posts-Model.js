const { default: mongoose } = require("mongoose")
const mongose = require("mongoose")

const PostSchema = mongose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users",
            required: true
        },

        date: {
            type: String,
            default: Date.now
        }
    }
)

module.exports = mongose.model("Posts", PostSchema)