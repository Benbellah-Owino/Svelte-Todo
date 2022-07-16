const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Must provide name"]
    },
    taskDone: {
        type: Boolean,
    }
})

module.exports = mongoose.model("TaskSchema", TaskSchema)