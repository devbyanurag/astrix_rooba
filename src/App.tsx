import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Landing from './components/Landing/Landing'

function App() {

  return (
    <>
      <SplashScreen/>
      <Landing/>
    </>
  )
}

export default App
