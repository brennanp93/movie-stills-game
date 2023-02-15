const MovieList = require('../../models/movielist');


module.exports = {
  index,
  // updateCount,
}

async function index(req, res) {
  const todayDate = new Date().toLocaleDateString();
  const todayItem = await MovieList.find({activeDate: todayDate})
  res.json(todayItem)
}

// async function updateCount(req,res) {
//   let id = req.body._id;
//   const filter = { _id: id };
//   const update = { count: req.body.count };
//   const updatedItem = await MovieList.findOneAndUpdate(filter, update);
//   res.json(updatedItem)
// }
