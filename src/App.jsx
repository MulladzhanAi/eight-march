import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import FloatingHearts from './components/FloatingHearts.jsx'
import StartScreen from './components/screens/StartScreen.jsx'
import QuizScreen from './components/screens/QuizScreen.jsx'
import FailScreen from './components/screens/FailScreen.jsx'
import SuccessScreen from './components/screens/SuccessScreen.jsx'
import { questions as QUESTIONS } from './data/questions.js'
import { choosePrize } from './data/prizes.js'

function App() {
  const [screen, setScreen] = useState('start') // 'start' | 'quiz' | 'fail' | 'success'
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [prize, setPrize] = useState(null)

  const currentQuestion = useMemo(
    () => (screen === 'quiz' && questions[currentIndex] ? questions[currentIndex] : null),
    [questions, currentIndex, screen],
  )

  const startQuiz = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, 3)
    setQuestions(picked)
    setCurrentIndex(0)
    setCorrectCount(0)
    setPrize(null)
    setScreen('quiz')
  }

  const handleAnswer = (isCorrect) => {
    if (!isCorrect) {
      setScreen('fail')
      setCurrentIndex(0)
      setCorrectCount(0)
      setQuestions([])
      setPrize(null)
      return
    }

    const nextCorrectCount = correctCount + 1

    if (nextCorrectCount >= 3) {
      const selectedPrize = choosePrize()
      setPrize(selectedPrize)
      setScreen('success')
      return
    }

    setCorrectCount(nextCorrectCount)
    setCurrentIndex((prev) => prev + 1)
  }

  const restartFromStart = () => {
    setScreen('start')
    setCurrentIndex(0)
    setCorrectCount(0)
    setQuestions([])
    setPrize(null)
  }

  return (
    <div className="app-root">
      <FloatingHearts />

      <motion.main
        className="app-shell"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <header className="app-header">
          <span className="emoji-big" aria-hidden="true">
            💌
          </span>
          <div>
            <div className="app-pill">Small romantic quiz</div>
            <h1 className="app-title">Love Quiz</h1>
          </div>
        </header>

        <section className="app-body">
          <AnimatePresence mode="wait">
            {screen === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <StartScreen onStart={startQuiz} />
              </motion.div>
            )}

            {screen === 'quiz' && currentQuestion && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <QuizScreen
                  question={currentQuestion}
                  questionIndex={currentIndex}
                  totalQuestions={3}
                  onAnswer={handleAnswer}
                />
              </motion.div>
            )}

            {screen === 'fail' && (
              <motion.div
                key="fail"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <FailScreen onTryAgain={startQuiz} onBackToStart={restartFromStart} />
              </motion.div>
            )}

            {screen === 'success' && prize && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <SuccessScreen prize={prize} onPlayAgain={startQuiz} />
              </motion.div>
            )}
          </AnimatePresence>

          <p className="tagline">
            С любовью, для особенного человека. Отвечай сердцем, не спеши.
          </p>
        </section>
      </motion.main>
    </div>
  )
}

export default App
