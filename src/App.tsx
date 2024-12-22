import { useRef, useState } from 'react'

function App() {
  const [ timeToFocus, setTimeToFocus ] = useState<number>(1500)
  const [takeAShortBreak, setShortBreak ] = useState<number>(300)
  const [ takeALongBreak, setTakeALongBreack ] = useState<number>(450)
  const [ timer, setTimer ] = useState<number>(timeToFocus)
  const [isActive, setIsActive] = useState<boolean>(false)
  const intervalRef = useRef<ReturnType<typeof setInterval>| null>( null)
  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((timerValue) => timerValue - 1)
    },1000)
  }

  const setTimerToFocus = (timeToFocus:number) => {
    setTimer(timeToFocus)
    setIsActive(false)
    if(intervalRef.current) clearInterval(intervalRef.current)
  }
  

  return (
    <div >
      <button onClick={() => setTimerToFocus(timeToFocus)}>time to focus</button>
      <button onClick={() => setTimerToFocus(takeAShortBreak)}>take a short break</button>
      <button onClick={() => setTimerToFocus(takeALongBreak)}>take a long break</button>

      <h1>time: {timer}</h1>

      <button onClick={() => {
        startTimer()
        setIsActive(true)
      }} disabled={isActive || timer===0 }>
        start
      </button>
      <button onClick={() => setTimerToFocus(0)}>
        reset
      </button>
</div>
  )
}

export default App
