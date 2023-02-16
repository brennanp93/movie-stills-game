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
  }, [score])
  //might need to fix this ^^ [score]

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
            setCookies={setCookies} />
        }
        <Footer />
      </main>
    </>
  );
}
