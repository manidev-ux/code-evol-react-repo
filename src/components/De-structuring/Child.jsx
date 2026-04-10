import React, { Component } from "react";

class Child extends Component {
  render() {
    const { name, color } = this.props;

    return (
      <>
        <p>This is child component</p>
        <p>The name is : {name} </p>
        <p>The color is : {color} </p>
      </>
    );
  }
}
export default Child;
