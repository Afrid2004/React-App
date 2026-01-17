import React from 'react'
import { NavLink } from 'react-router-dom'

const RouterNavbar = () => {
  return (
    <div className='mb-3 d-flex justify-content-center'>
      <nav className='d-flex gap-2'>
        <NavLink className="btn btn-info" to="/">Home</NavLink>
        <NavLink className="btn btn-info" to="/blog">Blog</NavLink>
        <NavLink className="btn btn-info" to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default RouterNavbar