import styled, {ThemeProvider} from 'styled-components'
import { Theme } from './components/styles/theme'
import {Card} from './components/card/index'
import { GlobalStyle } from './components/styles/globalstyle'
import { Main } from './components/main'


function App() {

  return (
    <>
  <ThemeProvider theme={Theme}>
  <GlobalStyle/>
    <Main>

    <Card/>
    
    </Main>
  </ThemeProvider>
    </>
  )
}

export default App
