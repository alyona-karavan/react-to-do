import { useState, useEffect, useCallback } from 'react'

const Timer = ({ timer, onTimerUpdate }) => {
  const [timeLeft, setTimeLeft] = useState(timer.minutes * 60 + timer.seconds)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setTimeLeft(timer.minutes * 60 + timer.seconds)
  }, [timer])

  useEffect(() => {
    let intervalId

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1
          if (newTime === 0) {
            setIsRunning(false)
            clearInterval(intervalId)
          }

          onTimerUpdate({
            minutes: Math.floor(newTime / 60),
            seconds: newTime % 60,
            running: newTime > 0 && isRunning,
            paused: !isRunning,
          })

          return newTime
        })
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning, onTimerUpdate])

  const startTimer = useCallback((event) => {
    event.stopPropagation()
    setIsRunning(true)
  }, [])

  const pauseTimer = useCallback((event) => {
    event.stopPropagation()
    setIsRunning(false)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <span className="description">
      <button className="icon icon-pause" onClick={pauseTimer} disabled={!isRunning}></button>
      <button className="icon icon-play" onClick={startTimer} disabled={isRunning}></button>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </span>
  )
}

export default Timer
