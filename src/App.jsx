import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { GlobalStyle } from './styles/darkMode/global.js'
import { ThemeProvider } from 'styled-components'
import dark from './styles/darkMode/dark'
import light from './styles/darkMode/light'
import BackgroundIcon from './components/BackgroundIcon'


function App() {

  const [theme, setTheme] = useState(dark)

  const toToggleTheme = () => {
    setTheme(theme.title == 'dark' ? light : dark)


  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toToggleTheme={toToggleTheme} />
        <BackgroundIcon />
        <MainContent />
      </ThemeProvider>
    </div>
  )
}

export default App
