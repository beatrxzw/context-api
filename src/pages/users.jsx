import React from 'react'

import {ThemeProvider} from 'styled-components'
import { Theme } from '../components/styles/theme'
import { GlobalStyle } from '../components/styles/globalstyle'
import { UseUser } from '../components/users/Users'
import { Main } from '../components/main/'

export const AllUsers = () => {
  return (
  
    <ThemeProvider theme={Theme}>
    <GlobalStyle/>
      <Main>
  
        <UseUser/>
      
      </Main>
    </ThemeProvider>
    
  )
}


