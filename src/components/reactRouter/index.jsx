import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Blog from '../../pages/blog'
import Contact from '../../pages/contact'
import ErrorPage from '../../pages/404'
import RouterNavbar from './routeNavbar'


const ReactRouter = () => {
  return (
    <BrowserRouter>
      <RouterNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter