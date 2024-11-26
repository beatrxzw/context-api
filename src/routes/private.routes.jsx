import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllUsers } from '../pages/users'
import Home from '../pages/home'


const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/allusers" element={<AllUsers/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PrivateRoutes
