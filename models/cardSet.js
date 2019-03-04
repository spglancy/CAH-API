const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cardSetSchema = new Schema({
  setName: String,
  blackCards: Array,
  whiteCards: Array,
})

module.exports = mongoose.model("cardSet", cardSetSchema)
