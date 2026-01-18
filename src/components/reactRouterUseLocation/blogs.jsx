import React from 'react';
import { BlogData } from './blogData';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const truncateBody = (str , num) => {
    if(str.length > num){
      return str.slice(0, num) + '...';
    }
    return str;
  }
  return (
      <div>
        <h1>Blog Page</h1>
        <div className="row h-100 mt-4">
          {BlogData.map((data) => {
            const {id , body, title, image} = data;
            return <article key={id} className='col-md-4 d-flex'>
                <div className="card d-flex flex-direction-colmn justify-content-between">
                  <div>
                    <h2>{title}</h2>
                    <p className='d-inline'>{truncateBody(body, 100)}<Link to={title} state={{id, body, title, image}}>Learn More</Link> </p>
                  </div>
                  <img src={image} className='blog-img' alt="html"/>
                </div>
            </article>
          })}
        </div>
    </div>
  )
}

export default Blogs