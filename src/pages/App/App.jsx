import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import * as answerKeyAPI from '../../utilities/answerkey-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [score, setScore] = useState(0);
  const [answerKey, setAnswerKey] = useState()

  useEffect(function () {
    async function getDailyItems() {
      if (user) {
      const entireAnswerKey = await answerKeyAPI.getAll();
      setAnswerKey(entireAnswerKey[0].answers)
    }
  };
    getDailyItems();
  }, [user])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} score={score} />
          <MainPage score={score} setScore={setScore} answerKey={answerKey} />
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
