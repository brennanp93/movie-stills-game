import { useState } from "react";
import SubmitForm from "../../components/SubmitForm/SubmitForm"
import Fuse from "fuse.js";
import { quizlist, answerKey } from "../../data";

export default function MainPage({ score, setScore }) {
  const [prompt, setPrompt] = useState('Good Luck!');
  const [buttonPrompt, setButtonPrompt] = useState('Next Question');
  const [numGuesses, setNumGuesses] = useState(3);
  const [incomingGuess, setIncomingGuess] = useState('')
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [index, setIndex] = useState(Math.floor(Math.random() * quizlist.length))
  const [hintOne, setHintOne] = useState('')
  const [hintTwo, setHintTwo] = useState('')
  const [hintThree, setHintThree] = useState('')
  const [dailyLimit, setDailyLimit] = useState(0)

  let currentMovie = quizlist[index]
  let correctAnswer = currentMovie.movie;

  let minLengthAnswer = Math.floor(correctAnswer.length * .66)

  function handleSubmit(evt) {
    evt.preventDefault();
    const options = {
      includeScore: true,
      keys: [{ name: 'answer' }]
    };
    const fuse = new Fuse(answerKey, options)
    const result = fuse.search(incomingGuess)[0].item.answer;
    /*------*/
    if (result === correctAnswer) {
      setDailyLimit(dailyLimit + 1)
      setWinner(true);
      // setPrompt('NICE');
      setIncomingGuess('');
      currentMovie.completed = true;
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
      // setPrompt('keep guessing');
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 2) {
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setHintTwo('Hint Two: ' + currentMovie.hints[1])
      setIncomingGuess('');
    } else if (result !== correctAnswer && numGuesses === 1) {
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setHintTwo('Hint Two: ' + currentMovie.hints[1])
      setHintThree('Hint Three: ' + currentMovie.hints[2])
      setIncomingGuess('');
    }
    if (result !== correctAnswer && numGuesses === 0) {
      alert('youlose');
      setWinner(true);
      quizlist.completed = true;
    }
  };

  const todayDate = new Date().toLocaleDateString();


  function handleChange(evt) {
    const newGuess = evt.target.value
    setIncomingGuess(newGuess)
  }
  function nextQuestion() {
    if (dailyLimit === 3) {
      setGameOver(true)
      return
    }
    if (quizlist.length <= 1) {
      setPrompt('game over')
      setButtonPrompt('final question')
      setGameOver(true);
      return
    }
    ;
    quizlist.splice(index, 1)
    setIndex(Math.floor(Math.random() * quizlist.length));
    setWinner(false);
    setNumGuesses(3);
    setHintOne('')
    setHintTwo('')
    setHintThree('')
    setIncomingGuess('');

  }

  return (
    <>{gameOver ?
      <div>Hello</div>
      :
      <div>
        <div>
          <h1>Guesses Remaining: {numGuesses}</h1>
          <div>
            <img src={currentMovie.image} alt="" />
          </div>
          <h3>{hintOne}</h3>
          <h3>{hintTwo}</h3>
          <h3>{hintThree}</h3>
          {!winner ?
            <SubmitForm handleSubmit={handleSubmit}
              incomingGuess={incomingGuess}
              handleChange={handleChange}
              minLengthAnswer={minLengthAnswer} />
            :
            <>
              <h2>{correctAnswer}</h2>
              <button onClick={nextQuestion}>Next Question</button>
            </>
          }
        </div>
      </div>
    }
    </>

  );
}