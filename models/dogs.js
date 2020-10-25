const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogsSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  age: {type: Number, required: true},
  description: {type: String},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('dogs', dogsSchema);