import { AuthContext } from './contexts/Auth'
import React, { useContext } from 'react'
import PrivateRoutes from './routes/private.routes'
import PublicRoutes from './routes/public.routes'


function App() {
const { auth } = useContext(AuthContext)

  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}

export default App
