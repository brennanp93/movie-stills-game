import './ResultPage.css'
export default function ResultPage({ prompt, score, correctAnswer, currentMovie }) {
  return (
    <>
      <div style={{ border: 'solid black' }}>
        <h1>{prompt}</h1>
        <h2>The Correct Answer Was:</h2>
        <h2><strong>{correctAnswer}</strong></h2>
        <img className="image" src={currentMovie.image} alt="" />
        <h1>Come back tomorrow to play again!</h1>
        <div>
          <p>Current Score: {score}</p>
        </div>
      </div>
    </>
  )
}