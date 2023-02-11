export default function AboutPage({ setAboutPage }) {


  return (
    <>
      <div className="about-page">
        {/* <div> */}
        <h2>How To Play:</h2>
        <article>
          Each day a new frame from a popular movie will be displayed. 
          The player gets 4 chances to guess the name of the movie based on the image. 
          After each incorrect guess, one hint is displayed. (Total of 3 hints)
          </article>
        {/* </div> */}
        <div>
          <button className="play-button" onClick={() => setAboutPage(true)}>Let's Play!</button>
        </div>
      </div>

    </>
  )
}