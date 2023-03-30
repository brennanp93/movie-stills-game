export default function AboutPage({ setAboutPage }) {

  return (
    <>
      <div className="about-page">
        <h2>How To Play:</h2>
        <ul>
          <li>A new frame from a popular movie will be displayed every day.</li>
          <li>The player has 4 chances to guess the name of the movie.</li>
          <li>After each incorrect guess, one of three hints is displayed.</li>
          {/* <li>There are a total of three hints.</li> */}
        </ul>
        <div>
          <button className="play-button" onClick={() => setAboutPage(true)}>Let's Play!</button>
        </div>
      </div>
    </>
  )
};