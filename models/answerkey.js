const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerKeySchema = new Schema({
  answers: [{ answer: String }],
});

module.exports = mongoose.model("AnswerKey", answerKeySchema);
