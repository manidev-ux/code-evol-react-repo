import React from "react";

const FunChild = ({ name, color }) => {
  return (
    <div>
      <p>This is from FunctionalChild component</p>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default FunChild;
