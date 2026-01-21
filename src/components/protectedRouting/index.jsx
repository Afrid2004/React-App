import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import TechBlogs from './techblogs'
import AddBlog from './addBlog'
import Protected from './protected'

const ProtectedRouting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='btn btn-info'>Log Out</button> : <button className='btn btn-info' onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/tech-blogs' element={ <TechBlogs /> } />
        <Route path='/add-blog' element={ <Protected isLoggedIn={isLoggedIn}>
          <AddBlog />
        </Protected> } />
      </Routes>
    </BrowserRouter>
  )
}

export default ProtectedRouting