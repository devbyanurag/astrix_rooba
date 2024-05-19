import SplashScreen from './components/SplashScreen/SplashScreen'
import Landing from './components/Landing/Landing'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {

  return (
    // dark mode gloabal provider to set dark mode / light mode across the application
    <DarkModeProvider>
      {/* SplashScreen with 5 seconds animation */}
      <SplashScreen />
      {/* main landing page after SplashScreen */}
      <Landing />
    </DarkModeProvider>
  )
}

export default App
