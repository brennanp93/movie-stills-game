const AnswerKey = require('../../models/answerkey');

module.exports = {
  index,
}

async function index(req, res) {
  const entireAnswerKey = await AnswerKey.find({});
  console.log(entireAnswerKey)
  res.json(entireAnswerKey)
}