import { useState, useEffect } from "react";
import SubmitForm from "../../components/SubmitForm/SubmitForm"
import ResultPage from "../../components/ResultPage/ResultPage";
import HintPage from "../../components/HintPage/HintPage";
import Fuse from "fuse.js";
import { movieList, movieArray } from "../../newdata";

export default function MainPage({ playCount, dailyQuestion, answerKey, cookies, setCookies, updateCount, score, setScore, }) {
  const [prompt, setPrompt] = useState('');
  const [winner, setWinner] = useState(() => {
    let winnerStatus = localStorage.getItem('winner')
    return(JSON.parse(winnerStatus))
  })
  const [incomingGuess, setIncomingGuess] = useState('')
  const [numGuesses, setNumGuesses] = useState(() => {
    let savedGuesses = localStorage.getItem('numGuesses');
    return (parseInt(savedGuesses) || 3)
  });
  let winnerNumGuesses = 4
  //For Setting Cookies
  const todayDate = new Date().toLocaleDateString();
  //For Setting Cookies Expiration
  let midnight = new Date();
  midnight.setHours(23, 59, 59, 0)
  //Current Movie (obj)
  let currentMovie = dailyQuestion
  let correctAnswer = currentMovie?.movie;
  let minLengthAnswer = Math?.floor(correctAnswer?.length * .66)
  //To store numGuesses in case of refresh
  useEffect(() => {
    localStorage.setItem('numGuesses', numGuesses);
  }, [numGuesses])
  //To reset numGuesses if it is not solved before midnight
  useEffect(() => {
    localStorage.setItem('numGuesses', 4);
  }, [dailyQuestion])
  //To save the score
  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('winner', winner)
  }, [score])


  function handleSubmit(evt) {
    evt.preventDefault();
    /*---fuzzy search---*/
    const options = {
      includeScore: true,
      keys: [{ name: 'answer' }],
    };
    const fuse = new Fuse(answerKey, options)
    const possibleResult = fuse.search(incomingGuess)[0]?.item.answer;
    let result;
    if (possibleResult === correctAnswer) {
      result = correctAnswer;
    } else { result = 'caterpillar' }
    /*---^ fuzzy search ^---*/
    if (result === correctAnswer) {
      setPrompt('Nice!');
      setIncomingGuess('');
      setNumGuesses(4)
      setCookies('date', todayDate, { expires: midnight });
      setScore(score + numGuesses)
      setWinner(true);
      playCount.count += 1;
    } else if (result !== correctAnswer && numGuesses === 4) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 3) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 2) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess('');
    }
    if (result !== correctAnswer && numGuesses === 1) {
      setCookies('date', todayDate, { expires: midnight });
      playCount.count += 1;
      setNumGuesses(4)
      setWinner(false)

    }
    updateCount(playCount, playCount._id)
  };
  function handleChange(evt) {
    const newGuess = evt.target.value
    setIncomingGuess(newGuess)
  };

  return (
    <>{currentMovie?.activeDate === cookies.date ?
      <ResultPage
        score={score}
        correctAnswer={correctAnswer}
        currentMovie={currentMovie}
        numGuesses={numGuesses}
        winnerNumGuesses={winnerNumGuesses}
        winner={winner}
      />
      :
      <div className="game-box">
        <div className="game-box-grids">
          {numGuesses === 1 ?
            <h2>Final Guess!</h2>
            :
            // <h2>Guesses Remaining:&nbsp;{numGuesses}</h2>
            <h2>You have {numGuesses} guesses remaining!</h2>
          }
          <div>
            <img src={currentMovie?.image} alt="" />
          </div>
          <SubmitForm
            handleSubmit={handleSubmit}
            incomingGuess={incomingGuess}
            handleChange={handleChange}
            minLengthAnswer={minLengthAnswer}
          />
          <HintPage
            numGuesses={numGuesses}
            currentMovie={currentMovie}
          />

        </div>
      </div>
    }
    </>
  );
}