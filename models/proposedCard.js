const mongoose = require("mongoose")
const Schema = mongoose.Schema

const proposedCardSchema = new Schema({
  content: String,
  userId: String,
})

module.exports = mongoose.model('proposedCard', proposedCardSchema)
