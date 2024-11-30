import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'

const PublicRoutes = ()  => {

  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>

  )
}

export default PublicRoutes
