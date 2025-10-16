import React, { Component } from "react";

class ClsCard extends Component {

  render() {

    return <div className="user">
      <h2>{this.props.title}</h2>
      <p>{this.props.desc}</p>
    </div>

  }

}

export default ClsCard;