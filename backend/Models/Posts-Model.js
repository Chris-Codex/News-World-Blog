const { default: mongoose } = require("mongoose")
const mongose = require("mongoose")

const PostSchema = mongose.Schema(
    {
        authorId: {
            type: String
        },

        author: {
            type: String,
        },

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

        date: {
            type: String,
            default: Date.now
        },

        user: {
            type: String,
            required: true
        }
    }
)

module.exports = mongose.model("Posts", PostSchema)