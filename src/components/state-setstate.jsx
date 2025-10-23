import React, { Component } from 'react'

export default class State extends Component {


  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }


  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className='card'>
        <div className="state-head">
          <h5>Counting : {count}</h5>
        </div>
        <div className="state-content d-flex gap-2">
          <button className='btn btn-info' onClick={this.handleDecrement} disabled={count <= 0 ? true : false}>-</button>
          <button className='btn btn-info' onClick={this.handleIncrement} disabled={count >= 5 ? true : false}>+</button>
        </div>
      </div>
    )
  }
}

