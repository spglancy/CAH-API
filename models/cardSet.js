const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cardSetSchema = new Schema({
  setName: String,
  blackCards: Object,
  whiteCards: Object,
})

module.exports = mongoose.model("cardSet", cardSetSchema)
