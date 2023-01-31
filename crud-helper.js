// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const MovieList = require('./models/movielist');
const AnswerKey = require('./models/answerkey');


// Local variables will come in handy for holding retrieved documents
let movieList, answerKey





// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');
// let user, item, category, order;
// let users, items, categories, orders;