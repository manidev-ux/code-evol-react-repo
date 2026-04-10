import React, { Component } from "react";

class ClsSt extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <>
        <p>Class-based Stateful Component</p>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </>
    );
  }
}

export default ClsSt;
