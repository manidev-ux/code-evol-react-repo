import React from "react";
import HelloChild from "./HelloChild";

function HelloPar() {
  return (
    <div>
      <p>This is from Hello parent component</p>
      <HelloChild greet="hello" msg="This is a greeting" />
      <HelloChild greet="hiii" msg="This is a hi message" color="Blue" />
      <HelloChild
        greet="How are you?"
        msg="This is a question"
        color="red"
        play="cricket"
      />
    </div>
  );
}

export default HelloPar;
