const PlayCount = require('../../models/playcount');

module.exports = {
  updateCount,
  index
}

async function index(req, res) {
  const playCount = await PlayCount.find({});
  res.json(playCount)
}

async function updateCount(req,res) {
  let id = req.body._id;
  const filter = { _id: id };
  const update = { count: req.body.count };
  const updatedItem = await PlayCount.findOneAndUpdate(filter, update);
  res.json(updatedItem)
}