import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import EventLanding from './components/EventLanding/EventLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SplashScreen/> */}
      <EventLanding/>
    </>
  )
}

export default App
