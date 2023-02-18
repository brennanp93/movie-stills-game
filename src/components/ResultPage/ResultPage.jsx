import { TwitterShareButton, TwitterIcon } from "react-share"
export default function ResultPage({ prompt, score, correctAnswer, currentMovie }) {
  let scorePhrase = [
    `Boom! My current score is ${score}!`,
    `Yeah, baby! I'm at ${score} points!`,
    `Woo-hoo! Look at my score: ${score}!`,
    `Oh, snap! I just hit ${score} points!`,
    `Scoreboard, baby! I'm at ${score}!`,
    `In your face! I'm currently at ${score} points!`,
    `Can't stop me now! I'm at ${score} points!`,
    `Bam! ${score} points and counting!`,
    `It's getting real, folks! I'm at ${score} points!`,
    `Let's gooooo! My score just hit ${score}!`
  ];
  let randomIdx = Math.floor(Math.random() * scorePhrase.length)
  let currentTweet = scorePhrase[randomIdx]
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
          <div className="twitter">
            Share Your Score!
          </div>
          <TwitterShareButton
            url={"https://name-that-movie.herokuapp.com/"}
            title={`${currentTweet}`}
            hashtags={["namethatmovie"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}