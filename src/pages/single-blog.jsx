import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../components/reactRouter/blogData';

const SingleBlog = () => {
  const {title} = useParams();
  const [blog ,setBlog] = useState('');

  useEffect(() => {
    const blogdata = BlogData.filter((data) => data.title === title);
    setBlog(blogdata[0]);
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <p>{blog.body}</p>
      <img className='w-100 single-blog mt-3' src={blog.image} alt={title} />
    </div>
  )
}

export default SingleBlog