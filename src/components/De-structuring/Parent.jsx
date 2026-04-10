import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <>
        <p>This is parent component</p>
        <Child name="John" color="blue" />
        <Child name="Jane" color="red" />
        <Child name="Bob" color="green" />
      </>
    );
  }
}
export default Parent;
