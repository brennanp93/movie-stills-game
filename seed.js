require('dotenv').config();
require('./config/database');

const MovieList = require('./models/movielist');
const AnswerKey = require('./models/answerkey');
const PlayCount = require('./models/playcount');

(async function () {
  await MovieList.deleteMany({});
  const movieList = await MovieList.create([
    {
      image: 'https://i.imgur.com/yBfBLvC.jpg',
      movie: 'The Shawshank Redemption',
      hints: ['Released: 1994', 'Starring: Tim Robbins', 'Based on a Stephen King Novel'],
      completed: false,
      activeDate: '2/2/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/SaYl9eV.jpg',
      movie: 'There Will Be Blood',
      hints: ['Released: 2007', 'Directed By: Paul Thomas Anderson', 'Starring: Daniel Day-Lewis'],
      completed: false,
      activeDate: '2/3/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/SZUrcDc.jpg',
      movie: 'Taxi Driver',
      hints: ['Released: 1976', 'Directed By: Martin Scorsese', 'Starring: Robert De Niro'],
      completed: false,
      activeDate: '2/4/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/xYjifnJ.jpg',
      movie: 'Shutter Island',
      hints: ['Released: 2010', 'Directed By: Martin Scorsese', 'Starring: Leonardo DiCaprio'],
      completed: false,
      activeDate: '2/1/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/eJjz4lr.jpg',
      movie: 'Django Unchained',
      hints: ['Released: 2012', 'Directed By: Quentin Tarantino', 'Starring: Jamie Foxx'],
      completed: false,
      activeDate: '1/31/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/5In1vNH.jpg',
      movie: 'The Godfather',
      hints: ['Released: 1972', 'Based on a Novel by Mario Puzo', 'Directed by Francis Ford Coppola'],
      completed: false,
      activeDate: '2/5/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/5Trh7Fc.jpg',
      movie: 'Full Metal Jacket',
      hints: ['Released: 1987', 'Genre: Drama, War', 'Directed by Stanley Kubrick'],
      completed: false,
      activeDate: '2/6/2023',
      count: 1,
    },
    {
      image: 'https://i.imgur.com/Ojpt6uJ.jpg',
      movie: 'Dunkirk',
      hints: ['Realeased in 2017','City in France', 'Directed by Christopher Nolan'],
      completed: false,
      activeDate: '2/7/2023',
      count: 0,
    },
    {
      image: 'https://i.imgur.com/Cd5t5ui.jpg',
      movie: "A Knight's Tale",
      hints: ['Released: 2001', 'Supporting Cast: Alan Tudyk, Paul Bettany', 'Starring: Heath Ledger'],
      completed: false,
      activeDate: '2/8/2023',
      count: 3,
    },
    {
      image: 'https://i.imgur.com/BLVyKA4.png',
      movie: "Ex Machina",
      hints: ['Released: 2014', 'Genre: Drama, Sci-Fi, Thriller', 'Starring: Domhnall Gleeson, Oscar Isaac'],
      completed: false,
      activeDate: '2/9/2023',
      count: 3,
    },
    {
      image: 'https://i.ibb.co/KGJfdsw/1261.webp',
      movie: "Home Alone 2: Lost In New York",
      hints: ['Released: 1992', 'Directed By: Chris Columbus', "Featuring: Catherine O'Hara, Joe Pesci"],
      completed: false,
      activeDate: '2/10/2023',
      count: 0,
    },
    {
      image: 'https://i.ibb.co/r4rYY97/119.webp',
      movie: "Terminator 2: Judgement Day",
      hints: ['Released: 1991', 'Directed By: James Cameron', "Featuring: Edward Furlong, Robert Patrick"],
      completed: false,
      activeDate: '2/11/2023',
      count: 0,
    },
    {
      image: 'https://i.ibb.co/ydpCbXW/6257.webp',
      movie: "Waterworld",
      hints: ['Released: 1995', "Featuring: Tina Majorino", "Starring: Kevin Costner"],
      completed: false,
      activeDate: '2/12/2023',
      count: 0,
    },
    {
      image: 'https://i.ibb.co/LYFfhBF/570.webp',
      movie: "Apollo 13",
      hints: ['Released: 1995', "Directed By: Ron Howard", "Featuring: Bill Paxton"],
      completed: false,
      activeDate: '2/13/2023',
      count: 0,
    },
    {
      image: 'https://i.ibb.co/NNmxjDD/1715.webp',
      movie: "Pulp Fiction",
      hints: ["Released: 1994", "Featuring: John Travolta", "Directed By: Quentin Tarantino"],
      completed: false,
      activeDate: '2/14/2023',
      count: 15,
    },
  ]);


  await AnswerKey.deleteMany({});
  const answerKey = await AnswerKey.create([{
    answers: [
      { answer: 'There Will Be Blood' },
      { answer: 'Taxi Driver' },
      { answer: 'Shutter Island' },
      { answer: 'Full Metal Jacket' },
      { answer: 'Django Unchained' },
      { answer: 'No Country For Old Men' },
      { answer: 'Waterworld' },
      { answer: 'The Shawshank Redemption' },
      { answer: 'Dunkirk' },
      { answer: 'Ex Machina' },
      { answer: 'Pulp Fiction' },
      { answer: 'Apollo 13' },
      { answer: "A Knight's Tale" },
      { answer: "Terminator 2: Judgement Day" },
      { answer: "Home Alone 2: Lost In New York" },
      { answer: 'The Godfather' },
      { answer: 'Gone Girl' },
      { answer: 'The Aviator' },
      { answer: 'The Girl With The Dragon Tattoo' },
      { answer: 'The Northman' },
      { answer: 'The Darjeeling Limited' },
      { answer: 'Midsommar' },
      { answer: 'Parasite' },
    ],
  }]);
  console.log(movieList);
  process.exit();
})();