import React, { Component } from "react";

class FunctionClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome visitor",
    };
  }
  changeHandler() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <>
        <p>This is function click component</p>
        <p>{this.state.message}</p>
        <button onClick={this.changeHandler.bind(this)}>Click Me</button>
      </>
    );
  }
}
export default FunctionClick;
