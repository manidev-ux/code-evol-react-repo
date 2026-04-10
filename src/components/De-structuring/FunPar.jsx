import React from "react";
import FunChild from "./FunChild";

const FunPar = () => {
  return (
    <>
      <p>This is from FunctionalParent component</p>
      <FunChild name="Philips" color="Green" />
      <FunChild name="Smith" color="Red" />
    </>
  );
};

export default FunPar;
