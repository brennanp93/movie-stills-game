import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [score, setScore] = useState(0);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <MainPage score={score} setScore={setScore} />
          {/* <Routes> */}
          {/* Route components in here */}
          {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
          {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          {/* <Route path="/game" element={<MainPage />} /> */}
          {/* </Routes> */}
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
