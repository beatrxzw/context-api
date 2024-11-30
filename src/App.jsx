import { AuthContext } from './contexts/Auth'
import React, { useContext } from 'react'
import PrivateRoutes from './routes/private.routes'
import PublicRoutes from './routes/public.routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
const { auth } = useContext(AuthContext)

  return(
    <BrowserRouter>
    {auth ? <PrivateRoutes/> : <PublicRoutes/>}
    
    </BrowserRouter>
  ) 
}

export default App
