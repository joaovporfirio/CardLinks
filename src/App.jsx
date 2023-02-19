import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { GlobalStyle } from './styles/darkMode/global.js'
import { ThemeProvider } from 'styled-components'
import dark from './styles/darkMode/dark'
import light from './styles/darkMode/light'
import BackgroundIcon from './components/BackgroundIcon'
import { useEffect, useState } from 'react';
import { useGithubAutomatedRepos, ProjectIcon, StackIcon } from 'github-automated-repos';

function App() {

  {/*useGithubAutomatedRepos hook*/ }
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState([])
  useEffect(() => {
    {/*Put here your github Name*/ }
    fetch('https://api.github.com/users/joaovporfirio/repos')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'tryrepo'))); {/*<-- keyWord*/ }
  }, [])


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
