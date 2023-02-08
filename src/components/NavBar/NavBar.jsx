import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, score }) {

  return (
    <header>
      <div>
        <span>Current Score: {score}</span>
      </div>
    </header>
  );
}