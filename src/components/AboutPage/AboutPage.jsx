export default function AboutPage({ setAboutPage }) {


  return (
    <>
      <div className="about-page">
        <div>
          <h2>Greetings!</h2>
          <h3>Read below to help you get started.</h3>
          <ul>
            <li>A single frame from a popular film is presented each day</li>
            <li>Hints are provided after each wrong guess (3 hints total)</li>
            <li>4 points are awarded for a correct guess</li>
            <li>1 point subtracted for each incorrect guess</li>
            <li>If the movie remains unidentified, no points are awarded.</li>
          </ul>
          <button className="play-button" onClick={() => setAboutPage(true)}>Let's Play!</button>
        </div>
      </div>

    </>
  )
}