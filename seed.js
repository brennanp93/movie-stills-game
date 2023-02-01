require('dotenv').config();
require('./config/database');

const MovieList = require('./models/movielist');
const AnswerKey = require('./models/answerkey');

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
  ]);
  await AnswerKey.deleteMany({});
  const answerKey = await AnswerKey.create([{
    answers: [
      { answer: 'There Will Be Blood' },
      { answer: 'Taxi Driver' },
      { answer: 'Shutter Island' },
      { answer: 'Gone Girl' },
      { answer: 'Full Metal Jacket' },
      { answer: 'The Aviator' },
      { answer: 'Django Unchained' },
      { answer: 'The Girl With The Dragon Tattoo' },
      { answer: 'The Northman' },
      { answer: 'The Darjeeling Limited' },
      { answer: 'No Country For Old Men' },
      { answer: 'Midsommar' },
      { answer: 'Parasite' },
      { answer: 'The Shawshank Redemption' },
      { answer: 'The Godfather' }],
  }]);
  console.log(movieList);
  process.exit();
})();