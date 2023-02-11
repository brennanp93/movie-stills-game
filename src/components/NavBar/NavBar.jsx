// import { Link } from 'react-router-dom';
export default function NavBar({ score, setAboutPage }) {
  return (
    <header>
      <a href="" onClick={() => setAboutPage(false)}>How Do I Play?</a>
      <h1 className='app-title'>Name That Movie!</h1>
      <div >
        <h3 className="game-score">Current Score: {score}</h3>
      </div>
    </header>
  );
}