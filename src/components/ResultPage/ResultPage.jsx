import { TwitterShareButton, TwitterIcon } from "react-share"
export default function ResultPage({ prompt, score, correctAnswer, currentMovie }) {
  return (
    <>
      <div className='game-box '>
        <div>
          <h1>{prompt}</h1>
          <h2>The Correct Answer Was:</h2>
          <h2><strong>{correctAnswer}</strong></h2>
          <img className="image" src={currentMovie?.image} alt="" />
          <h1>Come back tomorrow to play again!</h1>
          <div>
            <p>Current Score: {score}</p>
          </div>
          <TwitterShareButton
            title={`I'm up to ${score} points! What's your score?`}
            url={"https://name-that-movie.herokuapp.com/"}
            hashtags={["namethatmovie"]}
          >
            <div className="twitter">
              Share Your Score!
            </div>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}