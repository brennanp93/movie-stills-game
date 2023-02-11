import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import './App.css';
import './NewApp.css';


import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import * as answerKeyAPI from '../../utilities/answerkey-api'
import * as movieListAPI from '../../utilities/movielist-api'
import { useCookies } from 'react-cookie';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../../components/AboutPage/AboutPage';
import { type } from '@testing-library/user-event/dist/type';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [answerKey, setAnswerKey] = useState();
  const [dailyQuestion, setDailyQuestion] = useState();
  const [cookies, setCookies] = useCookies(['date'])
  const [score, setScore] = useState(() => {
    let savedScore = localStorage.getItem('score')
    return parseInt(savedScore) || 0;
  });
  const [aboutPage, setAboutPage] = useState(() => {
    let aboutBoolean = localStorage.getItem('aboutPage');
    return JSON.parse(aboutBoolean)
  })
// console.log(typeof(true))
  async function updateCount(booleanData, id) {
    await movieListAPI.updateCount(booleanData, id);
  }

  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score])

  useEffect(() => {
    localStorage.setItem('aboutPage', aboutPage)
  }, [aboutPage])

  useEffect(function () {
    async function getDailyItems() {
      const entireAnswerKey = await answerKeyAPI.getAll();
      const todayItem = await movieListAPI.getAll()
      setAnswerKey(entireAnswerKey[0].answers)
      setDailyQuestion(todayItem[0])
    };
    getDailyItems();
  }, [score])
  //might need to fix this ^^ [score]

  return (
    <>
      <main className="App">
        <NavBar user={user} score={score} setAboutPage={setAboutPage} />
        {!aboutPage ?
          <AboutPage setAboutPage={setAboutPage} />
          :
          <MainPage score={score}
            setScore={setScore}
            dailyQuestion={dailyQuestion}
            answerKey={answerKey}
            updateCount={updateCount}
            cookies={cookies}
            setCookies={setCookies} />
        }
        <Footer />
      </main>
    </>
  );
}
