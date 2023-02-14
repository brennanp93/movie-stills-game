import { useState, useEffect } from "react";
import SubmitForm from "../../components/SubmitForm/SubmitForm"
import ResultPage from "../../components/ResultPage/ResultPage";
import HintPage from "../../components/HintPage/HintPage";
import Fuse from "fuse.js";

export default function MainPage({ score, setScore, dailyQuestion, answerKey, cookies, setCookies, updateCount }) {
  const [prompt, setPrompt] = useState('');
  const [incomingGuess, setIncomingGuess] = useState('')
  const [numGuesses, setNumGuesses] = useState(() => {
    let savedGuesses = localStorage.getItem('numGuesses');
      return (parseInt(savedGuesses) || 3)
  });

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
      setPrompt('Nice job! You guessed correctly');
      setIncomingGuess('');
      setNumGuesses(4)
      setCookies('date', todayDate, { expires: midnight });
      currentMovie.count += 1;
      if (numGuesses === 4) {
        setScore(score + 4)
      } else if (numGuesses === 3) {
        setScore(score + 3)
      } else if (numGuesses === 2) {
        setScore(score + 2)
      } else if (numGuesses === 1) {
        setScore(score + 1)
      }
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
      setPrompt("Aw Shucks. Better luck tomorrow!");
      setCookies('date', todayDate, { expires: midnight });
      currentMovie.count = currentMovie.count + 1;
      setNumGuesses(4)
    }
    updateCount(currentMovie, currentMovie._id)
  };

  function handleChange(evt) {
    const newGuess = evt.target.value
    setIncomingGuess(newGuess)
  };

  return (
    <>{currentMovie?.activeDate === cookies.date ?
      <ResultPage
        score={score}
        prompt={prompt}
        correctAnswer={correctAnswer}
        currentMovie={currentMovie}
      />
      :
      <div className="game-box">
        <div className="game-box-grids">
          <h2>Guesses Remaining:  {numGuesses}</h2>
          <div>
            <img src={currentMovie?.image} alt="" />
            {/* <img className="image" src='v' alt="" /> */}

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