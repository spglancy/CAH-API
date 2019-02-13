const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSetSchema = new Schema({
  set: Object,
  black: Object,
  white: Object
});

module.exports = mongoose.model("cardSet", cardSetSchema);
