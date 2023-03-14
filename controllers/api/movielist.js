const MovieList = require('../../models/movielist');


module.exports = {
  index,
};

async function index(req, res) {
  const todayDate = new Date().toLocaleDateString();
  const todayItem = await MovieList.find({activeDate: todayDate})
  res.json(todayItem)
};
