import { useState, useEffect } from "react";
import SubmitForm from "../../components/SubmitForm/SubmitForm";
import ResultPage from "../../components/ResultPage/ResultPage";
import HintPage from "../../components/HintPage/HintPage";
import Fuse from "fuse.js";

export default function MainPage({
  playCount,
  dailyQuestion,
  answerKey,
  cookies,
  setCookies,
  updateCount,
  score,
  setScore,
  winner,
  setWinner,
}) {
  const [incomingGuess, setIncomingGuess] = useState("");
  const [numGuesses, setNumGuesses] = useState(
    parseInt(localStorage.getItem("numGuesses")) || 4
  );

  //For Setting Cookies & to retrieve today's question based on date. 
  const todayDate = new Date().toLocaleDateString();

  //For Setting Cookies Expiration
  let midnight = new Date();
  midnight.setHours(23, 59, 30, 0);

  //Current Movie (obj)
  let currentMovie = dailyQuestion?.find(
    (question) => question.activeDate === todayDate
  );
  // let currentMovie = dailyQuestion;
  // console.log(currentMovie);
  let correctAnswer = currentMovie?.movie;
  let minLengthAnswer = Math?.floor(correctAnswer?.length * 0.66);

  //To store numGuesses in case of refresh
  useEffect(() => {
    localStorage.setItem("numGuesses", numGuesses);
  }, [numGuesses]);

  // To reset numGuesses if it is not solved before midnight
  useEffect(() => {
    const resetNumGuess = setInterval(() => {
      const now = new Date();
      if (now >= midnight) {
        localStorage.setItem("numGuesses", 4);
      }
    }, 1000);
    return () => clearInterval(resetNumGuess);
  });
  //To save the score and if the user won or lost the round
  useEffect(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("winner", winner);
  }, [winner, score]);
  // Submit Function
  function handleSubmit(evt) {
    evt.preventDefault();
    /*---fuzzy search---*/
    const options = {
      includeScore: true,
      keys: [{ name: "answer" }],
    };
    const fuse = new Fuse(answerKey, options);
    const possibleResult = fuse.search(incomingGuess)[0]?.item.answer;
    let result;
    if (possibleResult === correctAnswer) {
      result = correctAnswer;
    } else {
      result = "zzyzx";
    }

    /*---^ fuzzy search ^---*/
    if (result === correctAnswer) {
      setIncomingGuess("");
      setNumGuesses(4);
      setCookies("date", todayDate, { expires: midnight });
      setScore(score + numGuesses);
      setWinner(true);
      playCount.count += 1;
    } else if (result !== correctAnswer && numGuesses === 4) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess("");
    } else if (result !== correctAnswer && numGuesses === 3) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess("");
    } else if (result !== correctAnswer && numGuesses === 2) {
      setNumGuesses(numGuesses - 1);
      setIncomingGuess("");
    }
    if (result !== correctAnswer && numGuesses === 1) {
      setCookies("date", todayDate, { expires: midnight });
      playCount.count += 1;
      setNumGuesses(4);
      setWinner(false);
    }
    updateCount(playCount, playCount._id);
  }
  function handleChange(evt) {
    const newGuess = evt.target.value;
    setIncomingGuess(newGuess);
  }

  return (
    <>
      {currentMovie?.activeDate === cookies.date ? (
        <ResultPage
          score={score}
          correctAnswer={correctAnswer}
          currentMovie={currentMovie}
          numGuesses={numGuesses}
          winner={winner}
        />
      ) : (
        <div className="game-box">
          {numGuesses === 1 ? (
            <h2>Final Guess!</h2>
          ) : (
            <h2>You have {numGuesses} guesses remaining!</h2>
          )}

          <div className="current-movie-image">
            <img
              src={currentMovie?.image}
              alt="The Current Movie Being Displayed"
            />
          </div>
          <SubmitForm
            handleSubmit={handleSubmit}
            incomingGuess={incomingGuess}
            handleChange={handleChange}
            minLengthAnswer={minLengthAnswer}
          />
          <HintPage numGuesses={numGuesses} currentMovie={currentMovie} />
        </div>
      )}
    </>
  );
}
