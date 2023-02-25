import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import * as answerKeyAPI from '../../utilities/answerkey-api'
import * as movieListAPI from '../../utilities/movielist-api'
import * as playcountAPI from '../../utilities/playcount-api'

import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../../components/AboutPage/AboutPage';

import './App.css';

export default function App() {
  const [answerKey, setAnswerKey] = useState();
  const [dailyQuestion, setDailyQuestion] = useState();
  const [playCount, setPlayCount] = useState(0)
  const [cookies, setCookies] = useCookies(['date'])
  const [score, setScore] = useState(() => {
    let savedScore = localStorage.getItem('score')
    return parseInt(savedScore) || 0;
  });
  const [aboutPage, setAboutPage] = useState(() => {
    let aboutBoolean = localStorage.getItem('aboutPage');
    return JSON.parse(aboutBoolean)
  })
  const [winner, setWinner] = useState(() => {
    let winnerStatus = localStorage.getItem('winner')
    return (JSON.parse(winnerStatus) || false)
  })

  async function updateCount(playCountData, id) {
    await playcountAPI.updateCount(playCountData, id)
  }
  useEffect(() => {
    localStorage.setItem('aboutPage', aboutPage)
  }, [aboutPage])

  useEffect(function () {
    async function getDailyItems() {
      const entireAnswerKey = await answerKeyAPI.getAll();
      const todayItem = await movieListAPI.getAll()
      const currentPlayCountObject = await playcountAPI.getAll()
      setAnswerKey(entireAnswerKey[0].answers)
      setDailyQuestion(todayItem[0])
      setPlayCount(currentPlayCountObject[0])
    };
    getDailyItems();
  }, [])

  // refreshes page at midnight to ensure next day's movie is rendered
  function refreshAt(hours, minutes, seconds) {
    const now = new Date();
    const then = new Date();
    if (now.getHours() > hours ||
      (now.getHours() === hours && now.getMinutes() > minutes) ||
      (now.getHours() === hours && now.getMinutes() === minutes && now.getSeconds() >= seconds)) {
      then.setDate(now.getDate() + 1);
    }
    then.setHours(hours, minutes, seconds);
    const timeout = then.getTime() - now.getTime();
    setTimeout(() => window.location.reload(true), timeout);
  }
  refreshAt(23, 59, 59)

  return (
    <>
      <main className="App">
        <NavBar score={score} setAboutPage={setAboutPage} />
        {!aboutPage ?
          <AboutPage setAboutPage={setAboutPage} />
          :
          <MainPage
            playCount={playCount}
            dailyQuestion={dailyQuestion}
            answerKey={answerKey}
            score={score}
            setScore={setScore}
            updateCount={updateCount}
            cookies={cookies}
            setCookies={setCookies}
            winner={winner}
            setWinner={setWinner}
          />
        }
        <Footer />
      </main>
    </>
  );
}
