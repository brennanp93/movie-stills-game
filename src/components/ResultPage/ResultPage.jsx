import { TwitterShareButton, TwitterIcon } from "react-share"
export default function ResultPage({ winner, score, correctAnswer, currentMovie }) {
  let scorePhrase = [
    `Boom! My current score is ${score}!`,
    `Yeah, baby! I'm at ${score} points!`,
    `Woo-hoo! Look at my score: ${score}!`,
    `Oh, snap! I just hit ${score} points!`,
    `Scoreboard, baby! I'm at ${score} points!`,
    `In your face! I'm currently at ${score} points!`,
    `Can't stop me now! I'm at ${score} points!`,
    `Bam! ${score} points and counting!`,
    `It's getting real, folks! I'm at ${score} points!`,
    `Let's gooooo! My score just hit ${score}!`,
    `Who's the boss? Me! Current Score: ${score}!`,
    `Hitting those targets like a pro! Score: ${score} points!`,
    `Don't be jelly, but I'm at ${score} points!`,
    `I'm on fire! ${score} points and rising!`,
    `Another one bites the dust! Score: ${score}points!`,
    `Just call me the scoring machine! ${score} points!`,
    `I'm not just good, I'm great! Current score: ${score}!`,
    `Nothing can stop me now! ${score} points and counting!`,
    `Feeling like a champion! Score: ${score}!`,
    `Step aside, everyone! ${score} points and still going strong!`
  ];
  let randomIdx = Math.floor(Math.random() * scorePhrase.length)
  let currentTweet = scorePhrase[randomIdx]
  return (
    <>
      <div className='game-box '>
        <div>
          {winner ?
            <h1>Nice Job!</h1>
            :
            <h1>Better Luck Next Time!</h1>
          }
          <h2>The Correct Answer Was:&nbsp;{correctAnswer}</h2>
          <img className="image" src={currentMovie?.image} alt="" />
          <h1>Come back tomorrow to play again!</h1>
          <div className="twitter">
            Share Your Score!
          </div>
          <TwitterShareButton
            url={"https://name-that-movie.herokuapp.com/"}
            title={`${currentTweet}`}
            hashtags={["namethatmovie"]}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}