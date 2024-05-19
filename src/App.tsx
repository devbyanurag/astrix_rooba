import SplashScreen from './components/SplashScreen/SplashScreen'
import Landing from './components/Landing/Landing'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {

  return (
    <DarkModeProvider>
      <SplashScreen />
      <Landing />
    </DarkModeProvider>
  )
}

export default App
