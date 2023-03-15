const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieListSchema = new Schema(
  {
    image: String,
    movie: String,
    hints: [String],
    activeDate: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MovieList", movieListSchema);
