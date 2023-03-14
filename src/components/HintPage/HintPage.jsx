export default function HintPage({ currentMovie, numGuesses }) {
  return (
    <>
      {
        numGuesses === 3 ?
          <h3> Hint 1: {currentMovie?.hints[0]}</h3>
          :
          ''
      }
      {
        numGuesses === 2 ?
          <>
            <h3> Hint 1: {currentMovie?.hints[0]}</h3>
            <h3> Hint 2: {currentMovie?.hints[1]}</h3>
          </>
          :
          ''
      }
      {
        numGuesses === 1 ?
          <>
            <h3> Hint 1: {currentMovie?.hints[0]}</h3>
            <h3> Hint 2: {currentMovie?.hints[1]}</h3>
            <h3> Hint 3: {currentMovie?.hints[2]}</h3>
          </>
          :
          ''
      }
    </>
  )
};