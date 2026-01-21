import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import User from './user'

const QueryParameter = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/user' element={ <User /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default QueryParameter