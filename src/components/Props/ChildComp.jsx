import React, { Component } from "react";

class ChildComp extends Component {
  render() {
    return (
      <>
        <h6>Child Component</h6>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </>
    );
  }
}
export default ChildComp;
