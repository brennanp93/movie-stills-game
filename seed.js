require("dotenv").config();
require("./config/database");

const MovieList = require("./models/movielist");
const AnswerKey = require("./models/answerkey");
const PlayCount = require("./models/playcount");

(async function () {
  await MovieList.deleteMany({});
  const movieList = await MovieList.create([
    {
      image: "https://i.imgur.com/yBfBLvC.jpg",
      movie: "The Shawshank Redemption",
      hints: [
        "Released: 1994",
        "Starring: Tim Robbins",
        "Based on a Stephen King Novel",
      ],
      completed: false,
      activeDate: "6/28/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/SaYl9eV.jpg",
      movie: "There Will Be Blood",
      hints: [
        "Released: 2007",
        "Directed By: Paul Thomas Anderson",
        "Starring: Daniel Day-Lewis",
      ],
      completed: false,
      activeDate: "6/29/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/SZUrcDc.jpg",
      movie: "Taxi Driver",
      hints: [
        "Released: 1976",
        "Directed By: Martin Scorsese",
        "Starring: Robert De Niro",
      ],
      completed: false,
      activeDate: "6/30/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/xYjifnJ.jpg",
      movie: "Shutter Island",
      hints: [
        "Released: 2010",
        "Directed By: Martin Scorsese",
        "Starring: Leonardo DiCaprio",
      ],
      completed: false,
      activeDate: "7/1/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/eJjz4lr.jpg",
      movie: "Django Unchained",
      hints: [
        "Released: 2012",
        "Directed By: Quentin Tarantino",
        "Starring: Jamie Foxx",
      ],
      completed: false,
      activeDate: "7/2/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/5In1vNH.jpg",
      movie: "The Godfather",
      hints: [
        "Released: 1972",
        "Based on a Novel by Mario Puzo",
        "Directed by Francis Ford Coppola",
      ],
      completed: false,
      activeDate: "7/3/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/5Trh7Fc.jpg",
      movie: "Full Metal Jacket",
      hints: [
        "Released: 1987",
        "Genre: Drama, War",
        "Directed by Stanley Kubrick",
      ],
      completed: false,
      activeDate: "7/4/2023",
      count: 1,
    },
    {
      image: "https://i.imgur.com/Ojpt6uJ.jpg",
      movie: "Dunkirk",
      hints: [
        "Released in 2017",
        "City in France",
        "Directed by Christopher Nolan",
      ],
      completed: false,
      activeDate: "7/5/2023",
      count: 0,
    },
    {
      image: "https://i.imgur.com/Cd5t5ui.jpg",
      movie: "A Knight's Tale",
      hints: [
        "Released: 2001",
        "Supporting Cast: Alan Tudyk, Paul Bettany",
        "Starring: Heath Ledger",
      ],
      completed: false,
      activeDate: "7/6/2023",
      count: 3,
    },
    {
      image: "https://i.imgur.com/BLVyKA4.png",
      movie: "Ex Machina",
      hints: [
        "Released: 2014",
        "Genre: Drama, Sci-Fi, Thriller",
        "Starring: Domhnall Gleeson, Oscar Isaac",
      ],
      completed: false,
      activeDate: "7/7/2023",
      count: 3,
    },
    {
      image: "https://i.ibb.co/KGJfdsw/1261.webp",
      movie: "Home Alone 2: Lost In New York",
      hints: [
        "Released: 1992",
        "Directed By: Chris Columbus",
        "Featuring: Catherine O'Hara, Joe Pesci",
      ],
      completed: false,
      activeDate: "7/8/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/r4rYY97/119.webp",
      movie: "Terminator 2: Judgement Day",
      hints: [
        "Released: 1991",
        "Directed By: James Cameron",
        "Featuring: Edward Furlong, Robert Patrick",
      ],
      completed: false,
      activeDate: "7/9/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/ydpCbXW/6257.webp",
      movie: "Waterworld",
      hints: [
        "Released: 1995",
        "Featuring: Tina Majorino",
        "Starring: Kevin Costner",
      ],
      completed: false,
      activeDate: "7/10/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/LYFfhBF/570.webp",
      movie: "Apollo 13",
      hints: [
        "Released: 1995",
        "Directed By: Ron Howard",
        "Featuring: Bill Paxton",
      ],
      completed: false,
      activeDate: "7/11/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/NNmxjDD/1715.webp",
      movie: "Pulp Fiction",
      hints: [
        "Released: 1994",
        "Featuring: John Travolta",
        "Directed By: Quentin Tarantino",
      ],
      completed: false,
      activeDate: "7/12/2023",
      count: 15,
    },
    {
      image: "https://i.ibb.co/9GyBwRW/296.webp",
      movie: "Edward Scissorhands",
      hints: [
        "Released in 1990",
        "Directed by: Tim Burton",
        "Featuring: Winona Ryder",
      ],
      completed: false,
      activeDate: "7/13/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/WnDJZ50/2319.webp",
      movie: "The Sound of Music",
      hints: ["Released in 1965", "Genre: Musical", "Starring: Julie Andrews"],
      completed: false,
      activeDate: "7/14/2023",
      count: 0,
    },
    {
      image: "https://i.ibb.co/HPDS8H7/2890.webp",
      movie: "Jurassic Park",
      hints: [
        "Released in 1993",
        "Based on a novel by Michael Chrichton",
        "Featuring: Jeff Goldblum",
      ],
      activeDate: "7/15/2023",
    },
    {
      image: "https://i.ibb.co/8b3s0Mm/65.webp",
      movie: "Little Women",
      hints: [
        "Released in 1994",
        "Featuring Susan Sarandon",
        "Also Featuring Winona Ryder",
      ],
      activeDate: "7/16/2023",
    },
    {
      image: "https://i.ibb.co/8mVvLmR/9358.webp",
      movie: "Back to the Future",
      hints: ["Released in 1985", "Featuring Lea Thompson", "DeLorean"],
      activeDate: "7/17/2023",
    },
    {
      image: "https://i.ibb.co/L0Cyv60/4801.webp",
      movie: "Chinatown",
      hints: [
        "Released in 1974",
        "Featuring Faye Dunaway",
        "Starring Jack Nicholson",
      ],
      activeDate: "7/18/2023",
    },
    {
      movie: "The Shawshank Redemption",
      image: "https://i.ibb.co/tCdbfQW/7616.webp",
      hints: [
        "Released: 1994",
        "Starring: Tim Robbins",
        "Based on a Stephen King Novel",
      ],
      activeDate: "7/19/2023",
    },
    {
      movie: "The Departed",
      image: "https://i.ibb.co/jMY5q0x/32-1053.jpg",
      hints: [
        "Released 2006",
        "Directed By Martin Scorcsese",
        "Featuring Leonardo DiCaprio",
      ],
      activeDate: "7/20/2023",
    },
    {
      movie: "The Godfather: Part II",
      image: "https://i.ibb.co/nc59Y8v/5215.webp",
      hints: [
        "Featuring Robert De Niro",
        "Featuring Diane Keaton",
        "Directed By Francis Ford Coppola",
      ],
      activeDate: "7/21/2023",
    },
    {
      movie: "The Dark Knight",
      image: "https://i.ibb.co/T2BfTvR/0234.jpg",
      hints: [
        "Released 2008",
        "Directed By Christopher Nolan",
        "Starring Christian Bale",
      ],
      activeDate: "7/22/2023",
    },
    {
      movie: "Léon: The Professional",
      image: "https://i.ibb.co/JKBRx8W/03-599.jpg",
      hints: [
        "Released in 1994",
        "Starring Natalie Portman",
        "Featuring Gary Oldman",
      ],
      activeDate: "7/23/2023",
    },
    // {
    //   movie: "Schindler's List",
    //   image: "https://i.ibb.co/RHLvywf/7953.jpg",
    //   hints: [
    //     "Takes Place During World War II",
    //     "Released 1993",
    //     "Directed By Steven Spielberg",
    //   ],
    //   activeDate: "7/24/2023",
    // },

    {
      movie: "Pulp Fiction",
      image: "https://i.ibb.co/M83tVpz/5579.webp",
      hints: [
        "Released: 1994",
        "Featuring: John Travolta",
        "Directed By: Quentin Tarantino",
      ],
      activeDate: "7/24/2023",
    },
    {
      movie: "Forrest Gump",
      image: "https://i.ibb.co/zh880v1/132.jpg",
      hints: [
        "Released in 1994",
        "Featuring Robin Wright",
        "Starring Tom Hanks",
      ],
      activeDate: "7/25/2023",
    },
    {
      movie: "Fight Club",
      image: "https://i.ibb.co/qmWhnw6/16-387.jpg",
      hints: [
        "Released in 1999",
        "Featuring Meat Loaf",
        "Starring Edward Norton",
      ],
      activeDate: "7/26/2023",
    },
    {
      movie: "The Matrix",
      image: "https://i.ibb.co/x7KvLxZ/063.jpg",
      hints: [
        "Released in 1999",
        "Genre: Action/Sci-Fi",
        "Starring Keanu Reeves",
      ],
      activeDate: "7/27/2023",
    },
    {
      movie: "Goodfellas",
      image: "https://i.ibb.co/sH3MgGf/30-431.jpg",
      hints: [
        "Released in 1990",
        "Written By Nicholas Pileggi",
        "Starring Ray Liotta",
      ],
      activeDate: "7/28/2023",
    },
    {
      movie: "One Flew Over the Cuckoo's Nest",
      image: "https://i.ibb.co/7QzXWyT/08-772.jpg",
      hints: [
        "Released in 1975",
        "Featuring Danny DeVito",
        "Starring Jack Nicholson",
      ],
      activeDate: "7/29/2023",
    },
    {
      movie: "Se7en",
      image: "https://i.ibb.co/sC0YTr9/56-830.jpg",
      hints: [
        "Released 1995",
        "Directed By David Fincher",
        "Starring Brad Pitt",
      ],
      activeDate: "7/30/2023",
    },
    {
      movie: "Saving Private Ryan",
      image: "https://i.ibb.co/LZh5Bcv/024.jpg",
      hints: [
        "Directed By Steven Spielberg",
        "Released in 1998",
        "Starring Tom Hanks",
      ],
      activeDate: "7/31/2023",
    },
    {
      movie: "Interstellar",
      image: "https://i.ibb.co/61prQrY/25-514.jpg",
      hints: [
        "Released in 2014",
        "Directed By Christopher Nolan",
        "Starring: Matthew McConaughey",
      ],
      activeDate: "8/1/2023",
    },
    {
      movie: "The Godfather",
      image: "https://i.ibb.co/9y4LsLx/6723.webp",
      hints: [
        "Released: 1972",
        "Based on a Novel by Mario Puzo",
        "Directed by Francis Ford Coppola",
      ],
      activeDate: "8/2/2023",
    },
    {
      movie: "The Prestige",
      image: "https://i.ibb.co/7RDg750/15-1163.jpg",
      hints: [
        "Released in 2006",
        "Featuring David Bowie",
        "Directed by Christopher Nolan",
      ],
      activeDate: "8/3/2023",
    },
    {
      movie: "American History X",
      image: "https://i.ibb.co/7QqSss7/09-68.jpg",
      hints: [
        "Released in 1998",
        "Featuring Ethan Suplee",
        "Starring Edward Norton",
      ],
      activeDate: "8/4/2023",
    },
    {
      movie: "Gladiator",
      image: "https://i.ibb.co/pywfq6V/026.jpg",
      hints: [
        "Released in 2000",
        "Directed By Ridley Scott",
        "Starring Russell Crowe",
      ],
      activeDate: "8/5/2023",
    },
    {
      movie: "Whiplash",
      image: "https://i.ibb.co/4RFbvZH/49-1278.jpg",
      hints: [
        "Starring Miles Teller",
        "Released in 2014",
        "Also starring J.K. Simmons",
      ],
      activeDate: "8/6/2023",
    },
    {
      movie: "Singin' in the Rain",
      image: "https://i.ibb.co/qxpWD8w/27-937.jpg",
      hints: [
        "Released in 1952",
        "Genre: Musical, Comedy, Romance",
        "Starring Gene Kelly",
      ],
      activeDate: "8/7/2023",
    },
    {
      movie: "Vertigo",
      image: "https://i.ibb.co/SmpXL51/19-1298.jpg",
      hints: [
        "Released 1958",
        "Starring Kim Novak",
        "Directed By Alfred Hitchcock",
      ],
      activeDate: "8/8/2023",
    },

    {
      movie: "Back to the Future",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Intouchables",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "Modern Times",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Pianist",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Departure",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Silence of the Lambs",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Shining",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "Coco",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "Amélie",
      image: "",
      hints: ["", "", ""],
      activeDate: "",
    },
    {
      movie: "The Treasure of the Sierra Madre",
      image: "",
      hints: ["", "", ""],
      activeDate: "3/24/2023",
    },
    {
      movie: "Jaws",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/6/2023",
    },
    {
      movie: "Up",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/7/2023",
    },
    {
      movie: "The Sting",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/8/2023",
    },
    {
      movie: "Kill Bill: Vol. 1",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/9/2023",
    },
    {
      movie: "Lawrence of Arabia",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/10/2023",
    },
    {
      movie: "All About Eve",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/11/2023",
    },
    {
      movie: "",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/12/2023",
    },
    {
      movie: "The Great Dictator",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/13/2023",
    },
    {
      movie: "Batman Begins",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/14/2023",
    },
    {
      movie: "The Apartment",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/15/2023",
    },
    {
      movie: "Vertigo",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/16/2023",
    },
    {
      movie: "The Prestige",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/17/2023",
    },
    {
      movie: "Forrest Gump",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/18/2023",
    },
    {
      movie: "Requiem for a Dream",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/19/2023",
    },
    {
      movie: "Indiana Jones and the Raiders of the Lost Ark",
      image: "",
      hints: ["", "", ""],
      activeDate: "4/20/2023",
    },
    // {
    //   movie: "City of God",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/15/2023"
    // },
    // {
    //   movie: "Spirited Away",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/16/2023"
    // },

    // {
    //   movie: "The Green Mile",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/18/2023"
    // },
    // {
    //   movie: "The Usual Suspects",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/19/2023"
    // },
    // {
    //   movie: "It's a Wonderful Life",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/11/2023"
    // },
    // {
    //   movie: "Life Is Beautiful",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/12/2023"
    // },
    // {
    //   movie: "The Lord of the Rings: The Return of the King",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "2/27/2023"
    // },
    // {
    //   movie: "Inception",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/4/2023"
    // },
    // {
    //   movie: "The Lord of the Rings: The Two Towers",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/5/2023"
    // },
    // {
    //   movie: "Star Wars: Episode V - The Empire Strikes Back",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/6/2023"
    // },
    // {
    //   movie: "The Lord of the Rings: The Fellowship of the Ring",
    //   image: "",
    //   hints: ["", "", ""],
    //   activeDate: "3/1/2023"
    // },
  ]);

  await AnswerKey.deleteMany({});
  const answerKey = await AnswerKey.create([
    {
      answers: [
        { answer: "There Will Be Blood" },
        { answer: "Taxi Driver" },
        { answer: "Shutter Island" },
        { answer: "Full Metal Jacket" },
        { answer: "Django Unchained" },
        { answer: "No Country For Old Men" },
        { answer: "Waterworld" },
        { answer: "The Shawshank Redemption" },
        { answer: "Dunkirk" },
        { answer: "Ex Machina" },
        { answer: "Pulp Fiction" },
        { answer: "Apollo 13" },
        { answer: "A Knight's Tale" },
        { answer: "Terminator 2: Judgement Day" },
        { answer: "Home Alone 2: Lost In New York" },
        { answer: "The Godfather" },
        { answer: "Gone Girl" },
        { answer: "The Aviator" },
        { answer: "The Girl With The Dragon Tattoo" },
        { answer: "The Northman" },
        { answer: "The Darjeeling Limited" },
        { answer: "Midsommar" },
        { answer: "Léon: The Professional" },
        { answer: "Interstellar" },
        { answer: "Forrest Gump" },
        { answer: "Fight Club" },
        { answer: "Chinatown" },
        { answer: "Se7en" },
        { answer: "Saving Private Ryan" },
        { answer: "One Flew Over the Cuckoo's Nest" },
        { answer: "The Prestige" },
        { answer: "American History X" },
        { answer: "Gladiator" },
        { answer: "Whiplash" },
        { answer: "Singin' in the Rain" },
        { answer: "Vertigo" },
        { answer: "Goodfellas" },
        { answer: "The Matrix" },
        { answer: "The Departed" },
        { answer: "Schindler's List" },
        { answer: "The Dark Knight" },
        { answer: "The Godfather: Part II" },
        { answer: "Back to the Future" },
        { answer: "Little Women" },
        { answer: "The Sound of Music" },
        { answer: "Edward Scissorhands" },
        { answer: "Jurrasic Park" },
      ],
    },
  ]);
  console.log(movieList);
  process.exit();
})();
