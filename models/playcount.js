const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playCountSchema = new Schema({
  count: Number,
});

module.exports = mongoose.model('PlayCount', playCountSchema);
