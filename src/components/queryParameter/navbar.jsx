import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mb-4 d-flex justify-content-center'>
    <nav className='d-flex gap-2'>
      <NavLink className="btn btn-info" to="/">Home</NavLink>
      <NavLink className="btn btn-info" to="/user">User</NavLink>
    </nav>
    </div>
  )
}

export default Navbar