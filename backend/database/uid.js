const mongoose = require("mongoose")

const uid = new mongoose.Schema({
    tuid: Number,
})

module.exports = mongoose.model("uid", uid)