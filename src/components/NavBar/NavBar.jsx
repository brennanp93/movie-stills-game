// import { Link } from 'react-router-dom';
export default function NavBar({ user, setUser, score }) {
  return (
    <header>
      {/* <a href="">About</a> */}
      <h1 className='title'>Name That Movie!</h1>
      <div>
        <span>Current Score: {score}</span>
      </div>
    </header>
  );
}