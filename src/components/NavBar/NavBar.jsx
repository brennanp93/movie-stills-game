
export default function NavBar({ score, setAboutPage }) {

  return (
    <header>
      <button className="link-button" onClick={() => setAboutPage(false)}>How Do I Play?</button>
      <h1 className='app-title'>Name That Movie!</h1>
      <div>
        <h3 className="game-score">Current Score: {score}</h3>
      </div>
    </header>
  );
}