import React, { Component } from 'react'

export default class EventhandlerOnchange extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }



  handleFormData = (event) => {
    event.preventDefault();
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handlePassChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }



  render() {
    const { name, email, password } = this.state;
    return (
      <div className='d-flex gap-3 flex-wrap'>
        <div className="form card">
          <h4 className='mb-3'>User Details Form</h4>
          <form onSubmit={this.handleFormData}>
            <div className="form-group mb-3">
              <input type="text" className="form-control" placeholder="Enter your name" required onChange={this.handleNameChange} />
            </div>
            <div className="form-group mb-3">
              <input type="email" className="form-control" placeholder="Enter email" required onChange={this.handleEmailChange} />
            </div>
            <div className="form-group mb-3">
              <input type="password" className="form-control" placeholder="Password" required onChange={this.handlePassChange} />
            </div>
            <button type="submit" className="btn btn-info w-100">Submit</button>
          </form>
        </div>
        <div className="showing-data card">
          <h4 className='mb-3'>User Data Fetched From Details Form</h4>
          <div className="user-data-content">
            <h6 className='mb-3'>Name : {name}</h6>
            <h6 className='mb-3'>Email : {email}</h6>
            <h6 className='mb-3'>Password : {password}</h6>
          </div>
        </div>
      </div>
    )
  }
}
