import React from "react";

const HelloChild = (props) => {
  return (
    <div>
      <p>This is from Hello child component </p>
      <p>{props.greet}</p>
      <p>{props.msg}</p>
      <p>{props.color}</p>
      <p>{props.play}</p>
    </div>
  );
};

export default HelloChild;
