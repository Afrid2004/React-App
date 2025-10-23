import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h3 className='mb-3'>User is in Login Page</h3>
        <img src="./images/login.png" className='img-fluid w-10 mb-3' />
        <p>All the content displayed here represents everything included on the login page.</p>
        <ol>
          <li>Page Title</li>
          <li>Login Form Image</li>
          <li>A Short Description</li>
        </ol>
      </div>
    )
  }
}
