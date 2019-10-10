const mongoose = require('mongoose');

const { Schema } = mongoose;

const apiKeySchema = new Schema({
  key: String,
});

module.exports = mongoose.model('apiKey', apiKeySchema);
