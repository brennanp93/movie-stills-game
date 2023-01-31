const MovieList = require('../../models/movielist');

module.exports = {
  index,
  updateBool,
}

async function index(req, res) {
  const todayDate = new Date().toLocaleDateString();
  const todayItem = await MovieList.find({activeDate: todayDate})
  // console.log(todayItem)
  res.json(todayItem)
}

async function updateBool(req,res) {
  let id = req.body._id;
  const filter = { _id: id };
  const update = { completed: req.body.completed };
  const updatedItem = await MovieList.findOneAndUpdate(filter, update);
  res.json(updatedItem)
}