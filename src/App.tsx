import { useRef, useState } from 'react'
import { Button } from 'antd'
import { DefaultTimersContainer, GlobalStyle, StyledTimerButton, TimerConteiner } from './styles'

const App = () => {
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
    <>
      <GlobalStyle/>
    <TimerConteiner >
      <DefaultTimersContainer>

      <StyledTimerButton onClick={() => setTimerToFocus(timeToFocus)}>time to focus</StyledTimerButton>
      <StyledTimerButton onClick={() => setTimerToFocus(takeAShortBreak)}>take a short break</StyledTimerButton>
      <StyledTimerButton onClick={() => setTimerToFocus(takeALongBreak)}>take a long break</StyledTimerButton>
      </DefaultTimersContainer>
      <div>


      <h1>{timer}</h1>
      </div>

      <Button onClick={() => {
        startTimer()
        setIsActive(true)
      }} disabled={isActive || timer===0 }>
        start
      </Button>
      <Button onClick={() => setTimerToFocus(0)}>
        reset
      </Button>
</TimerConteiner>
        </>
  )
}

export default App
