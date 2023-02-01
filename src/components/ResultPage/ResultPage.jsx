export default function ResultPage({ prompt, score, correctAnswer }) {
  return (
    <div>
      <div style={{border: ' solid black'}}>
        <h1>{prompt}</h1>
        <h2>The Correct Answer Was: {correctAnswer}</h2>
        <h1>Come back tomorrow to play again!</h1>
        <div>
          <p>Current Score: {score}</p>
        </div>
      </div>
    </div>
  )
}