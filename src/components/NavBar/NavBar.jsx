// import { Link } from 'react-router-dom';
export default function NavBar({ score }) {
  return (
    <header>
      {/* <a href="">About</a> */}
      <h1 className='app-title'>Name That Movie!</h1>
      <div >
        <h3 className="game-score">Current Score: {score}</h3>
      </div>
    </header>
  );
}