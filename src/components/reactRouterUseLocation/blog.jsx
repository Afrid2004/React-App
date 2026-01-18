import React from 'react'
import { useLocation } from 'react-router-dom'

const Blog = () => {
  const blogLocation = useLocation();
  const {title, body, image} = blogLocation.state;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img className='w-100 single-blog mt-3' src={image} alt={title} />
    </div>
  )
}

export default Blog