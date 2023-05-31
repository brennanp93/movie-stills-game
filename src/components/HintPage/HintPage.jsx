export default function HintPage({ currentMovie, numGuesses }) {
  return (
    <div className="hint-page">
      {numGuesses === 3 ? (
        <h3>
          <span>Hint 1:</span> {currentMovie?.hints[0]}
        </h3>
      ) : (
        ""
      )}
      {numGuesses === 2 ? (
        <>
          <h3>
            {" "}
            <span>Hint 1:</span> {currentMovie?.hints[0]}&nbsp;|&nbsp;
          </h3>
          <h3>
            {" "}
            <span>Hint 2:</span> {currentMovie?.hints[1]}
          </h3>
        </>
      ) : (
        ""
      )}
      {numGuesses === 1 ? (
        <>
          <h3>
            {" "}
            <span>Hint 1:</span> {currentMovie?.hints[0]}&nbsp;|&nbsp;
          </h3>
          <h3>
            {" "}
            <span>Hint 2:</span> {currentMovie?.hints[1]}&nbsp;|&nbsp;
          </h3>
          <h3>
            <span>Hint 3:</span> {currentMovie?.hints[2]}&nbsp;|&nbsp;
          </h3>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
