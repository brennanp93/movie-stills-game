import { TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from "react-share"
export default function ResultPage({ prompt, score, correctAnswer, currentMovie, numGuesses }) {
  let twitterEmoji = ''
  if (numGuesses === 4) {
    twitterEmoji = 'Got it in the first try! 🎦🎦🎦🎦'
  } else if (numGuesses === 3) {
    twitterEmoji = '🎦🎦🎦'
  } else if (numGuesses === 2) {
    twitterEmoji = '🎦🎦'
  } else if (numGuesses ===1) {
    twitterEmoji = '🎦'
  } else {
    twitterEmoji = ''
  }
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
            // title={`I'm up to ${score} points! What's your score?`}
            // title='🎦'
            title={`Current Score ${score}!
            ${twitterEmoji}`}
            url={"https://name-that-movie.herokuapp.com/"}
            hashtags={["namethatmovie"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </>
  )
}