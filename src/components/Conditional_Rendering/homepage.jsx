import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3 className='mb-3'>User is in Home Page</h3>
        <img src="./images/car-1.jpg" className='img-fluid w-10 mb-3' />
        <p>All the content displayed here represents everything included on the home page.</p>
        <ol>
          <li>Page Title</li>
          <li>Car Image</li>
          <li>A Short Description</li>
        </ol>
      </div>
    )
  }
}
