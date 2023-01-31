export default function ResultPage({ prompt, score }) {
  return (
    <div>
      <div>
        <h1>Come back tomorrow to play again!</h1>
        <div>
          <p>Current Score: {score}</p>
        </div>
      </div>
    </div>
  )
}