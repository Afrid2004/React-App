import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Blogs from './blogs'
import Navbar from './navbar'
import Blog from './blog'

const ReactRouterUseLocation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/l-blog' element={<Blogs />} />
        <Route path='/l-blog/:title' element={ <Blog /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default ReactRouterUseLocation