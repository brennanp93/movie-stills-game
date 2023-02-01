import { useState, useEffect } from 'react';

// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import * as answerKeyAPI from '../../utilities/answerkey-api'
import * as movieListAPI from '../../utilities/movielist-api'
import { useCookies } from 'react-cookie';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [answerKey, setAnswerKey] = useState();
  const [dailyQuestion, setDailyQuestion] = useState();
  const [cookies, setCookies, removeCookies] = useCookies(['date'])
  const [score, setScore] = useState(() => {
    let savedScore = localStorage.getItem('score')
    return parseInt(savedScore) || 0;
  });
// console.log(answerKey, "APP.JS")
  async function updateCount(booleanData, id) {
    await movieListAPI.updateCount(booleanData, id);
  }
  
  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score])

  useEffect(function () {
    async function getDailyItems() {
      if (user) {
      const entireAnswerKey = await answerKeyAPI.getAll();
      const todayItem = await movieListAPI.getAll()
      setAnswerKey(entireAnswerKey[0].answers)
      setDailyQuestion(todayItem[0])
    }
  };
    getDailyItems();
  }, [user])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} score={score} />
          <MainPage score={score} 
          setScore={setScore}
          dailyQuestion={dailyQuestion}
          answerKey={answerKey}
          updateCount={updateCount}
          cookies={cookies}
          setCookies={setCookies} />
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
