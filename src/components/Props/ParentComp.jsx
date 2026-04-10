import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  render() {
    return (
      <>
        <h5>Parent Component</h5>
        <ChildComp name="John" age={30} />
        <ChildComp name="Jane" age={25} />
        <ChildComp name="Doe" age={35} />
      </>
    );
  }
}
export default ParentComp;
