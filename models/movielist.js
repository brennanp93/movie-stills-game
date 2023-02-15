const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieListSchema = new Schema({
  image: String,
  movie: String, 
  hints: [String],
  completed: Boolean,
  activeDate: String,
  count: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('MovieList', movieListSchema);
