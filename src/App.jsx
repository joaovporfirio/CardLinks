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


  // const [theme, setTheme] = useState(dark)

  // const toToggleTheme = () => {
  //   setTheme(theme.title == 'dark' ? light : dark)


  // }




  return (
    <div className="App">
      {
        repository.map((item) => {
          return (
            <div key={item.id}>
              {/*Project Icon*/}
              {item.topics.map((icon) => {
                return (
                  <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                )
              })}
              {/*html Url*/}
              <a href={item.html_url}>
                {/*Name Project*/}
                <h1>{item.name}</h1>
              </a>
              {/*Description*/}
              <p>{item.description}</p>
              {/*Homepage*/}
              <a href={item.homepage}>
                <h3>Homepage</h3>
              </a>
              {/*Stacks Icon*/}
              {item.topics.map((icon) => {
                return (
                  <StackIcon key={icon} className="stack_Icon" iconItem={icon} />
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}

{/* <div className="App">
<ThemeProvider theme={theme}>
  <GlobalStyle />
  <Header toToggleTheme={toToggleTheme} />
  <BackgroundIcon />
  <MainContent />
</ThemeProvider>
</div>
)
} */}

export default App
