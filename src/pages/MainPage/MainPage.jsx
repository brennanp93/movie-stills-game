import { useState, useEffect } from "react";
import SubmitForm from "../../components/SubmitForm/SubmitForm"
import ResultPage from "../../components/ResultPage/ResultPage";
import Fuse from "fuse.js";
import { quizlist } from "../../data";
// import { quizlist } from "../../data";
import "./MainPage.css"



export default function MainPage({ score, setScore, dailyQuestion, answerKey, cookies, setCookies, updateCount }) {
  let currentMovie = dailyQuestion
  const [prompt, setPrompt] = useState('');
  const [incomingGuess, setIncomingGuess] = useState('')
  // const [index, setIndex] = useState(Math.floor(Math.random() * quizlist.length))
  const [hintOne, setHintOne] = useState('')
  const [hintTwo, setHintTwo] = useState('')
  const [hintThree, setHintThree] = useState('')
  // const [numGuesses, setNumGuesses] = useState(3);
  const [numGuesses, setNumGuesses] = useState(() => {
    let savedGuesses = localStorage.getItem('numGuesses');
    return (parseInt(savedGuesses) || 3)
  });
  // const [cookies, setCookies, removeCookies] = useCookies(['date'])
  // const [winner, setWinner] = useState(false);
  // const [buttonPrompt, setButtonPrompt] = useState('Next Question');
  // const [count, setCount] = useState(0);
  // const [dailyQuestion1, setDailyQuestion] = useState(dailyQuestion)

  // let currentMovie = quizlist[index]
  // console.log(currentMovie)

  useEffect(() => {
    localStorage.setItem('numGuesses', numGuesses);
    // localStorage.setItem('hintOne', hintOne);
  }, [numGuesses])


  let correctAnswer = currentMovie?.movie;

  const todayDate = new Date().toLocaleDateString();
  let midnight = new Date();
  midnight.setHours(23, 59, 59, 0)
  let minLengthAnswer = Math.floor(correctAnswer?.length * .66)

console.log(todayDate)
  // function handleUpdateBoolean(idx, id) {
  //   updateCount(dailyQuestion, id);
  // };

  function handleSubmit(evt) {
    evt.preventDefault();
    /*---fuzzy search---*/
    const options = {
      includeScore: true,
      keys: [{ name: 'answer' }],
      threshold: 0.6,
    };
    const fuse = new Fuse(answerKey, options)
    const possibleResult = fuse.search(incomingGuess)[0]?.item.answer;
    let result;
    if (possibleResult === correctAnswer) {
      result = correctAnswer;
    } else { result = 'caterpillar' }
    /*---^ fuzzy search ^---*/
    if (result === correctAnswer) {
      setPrompt('Nice job! You guessed correctly');
      setIncomingGuess('');
      setNumGuesses(3)
      setCookies('date', todayDate, { expires: midnight })
      currentMovie.count = currentMovie.count + 1

      if (numGuesses === 3) {
        setScore(score + 4)
      } else if (numGuesses === 2) {
        setScore(score + 3)
      } else if (numGuesses === 1) {
        setScore(score + 2)
      } else if (numGuesses === 0) {
        setScore(score + 1)
      } else if (numGuesses === -1) {
        setScore(score + 0)
      };

    } else if (result !== correctAnswer && numGuesses === 3) {
      setNumGuesses(numGuesses - 1);
      // setCookies('numGuesses', numGuesses, { expires: midnight })
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 2) {
      setNumGuesses(numGuesses - 1);
      setHintTwo('Hint Two: ' + currentMovie.hints[1])
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 1) {
      setNumGuesses(numGuesses - 1);
      setHintThree('Hint Three: ' + currentMovie.hints[2])
      setIncomingGuess('');
    }
    if (result !== correctAnswer && numGuesses === 0) {
      setPrompt("Aw Shucks. Better luck tomorrow!");
      setCookies('date', todayDate, { expires: midnight });
      currentMovie.count = currentMovie.count + 1;
    }
    // setNumGuesses(3)
    updateCount(currentMovie, currentMovie._id)
  };

  function handleChange(evt) {
    const newGuess = evt.target.value
    setIncomingGuess(newGuess)
  };

  return (
    <>{currentMovie?.activeDate === cookies.date ?
      <ResultPage score={score} prompt={prompt} correctAnswer={correctAnswer} currentMovie={currentMovie} />
      :
      <div className="game-box">
        <div>
          <h1>Guesses Remaining: {numGuesses}</h1>
          <div>
            <img className="image" src={currentMovie?.image} alt="" />
          </div>
          {
            numGuesses === 2 ?
              <h3> Hint 1: {currentMovie.hints[0]}</h3>
              :
              ''
          }
          {
            numGuesses === 1 ?
              <>
                <h3> Hint 1: {currentMovie.hints[0]}</h3>
                <h3> Hint 2: {currentMovie.hints[1]}</h3>
              </>
              :
              ''
          }
          {
            numGuesses === 0 ?
              <>
                <h3> Hint 1: {currentMovie.hints[0]}</h3>
                <h3> Hint 2: {currentMovie.hints[1]}</h3>
                <h3> Hint 3: {currentMovie.hints[2]}</h3>
              </>
              :
              ''
          }
          {/* <h3>{hintTwo}</h3>
          <h3>{hintThree}</h3> */}
          <SubmitForm handleSubmit={handleSubmit}
            incomingGuess={incomingGuess}
            handleChange={handleChange}
            minLengthAnswer={minLengthAnswer} />
        </div>
      </div>
    }
    </>
  );
}