const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
    birdName: String,
    birdPrice: Number,
    birdColor: String
})
module.exports = mongoose.model("bird", birdSchema)