const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerKeySchema = new Schema({
  answers: [
    { answer: String }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('AnswerKey', answerKeySchema);
