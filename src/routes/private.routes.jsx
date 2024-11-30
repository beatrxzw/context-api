import React, {useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllUsers } from '../pages/users'
import Home from '../pages/home'
import { AuthContext } from '../contexts/Auth'


const PrivateRoutes = () => {

  const { auth } = useContext(AuthContext)

  return (
      <Routes>
        {auth ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/allusers" element={<AllUsers />} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
      </Routes>

  )
}

export default PrivateRoutes
