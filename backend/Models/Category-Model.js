const mongose = require("mongoose")

const CategorySchema = mongose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongose.model("Category", CategorySchema)