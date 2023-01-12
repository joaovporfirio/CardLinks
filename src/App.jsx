import { useState } from 'react'
import { GiCoffeeCup } from 'react-icons/gi'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { GlobalStyle } from './styles/darkMode/global.js'
import { ThemeProvider } from 'styled-components'
import dark from './styles/darkMode/dark'
import light from './styles/darkMode/light'

function App() {

  const [theme, setTheme] = useState(dark)

  const toToggleTheme = () => {
    setTheme(theme.title == 'dark' ? light : dark)

    if(theme.title == 'dark') {
      {$props => props.theme.icon}
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <GlobalStyle />
        <Header toToggleTheme={toToggleTheme} />
        <MainContent />
        <GiCoffeeCup id='icon-base' />
      </ThemeProvider>
    </div>
  )
}

export default App
