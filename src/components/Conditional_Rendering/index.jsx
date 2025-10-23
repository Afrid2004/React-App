import React, { Component } from 'react'
import HomePage from './homepage';
import LoginPage from './loginpage';

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: this.props.booleanvalue
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="card">
        {isLoggedIn ? <HomePage /> : <LoginPage />}
      </div>
    )
  }
}
