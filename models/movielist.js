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

// image: 'https://i.imgur.com/SaYl9eV.jpg',
//     movie: 'There Will Be Blood',
//     hints: ['Released: 2007', 'Directed By: Paul Thomas Anderson', 'Starring: Daniel Day-Lewis'],
//     completed: false,
//     activeDate: '1/31/2023'