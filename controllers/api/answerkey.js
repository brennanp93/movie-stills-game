const AnswerKey = require('../../models/answerkey');

module.exports = {
  index,
}

async function index(req, res) {
  const entireAnswerKey = await AnswerKey.find({}, {answers: 1, _id: 0});
  // console.log(req)
  res.json(entireAnswerKey)
}