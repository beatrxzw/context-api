import React from 'react'

import {ThemeProvider} from 'styled-components'
import { Theme } from '../components/styles/theme'
import { GlobalStyle } from '../components/styles/globalstyle'
import {Card} from '../components/card/'
import { Main } from '../components/main/'

const Login = () => {
  return (
    
    <ThemeProvider theme={Theme}>
    <GlobalStyle/>
      <Main>
  
      <Card/>
      
      </Main>
    </ThemeProvider>
  )
}

export default Login
