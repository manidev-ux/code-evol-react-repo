import { useState } from "react";

function FunSt() {
  const [message, setMessage] = useState("Hello, World!");

  const changeMessage = () => {
    setMessage("Thank you for subscribing");
  };

  return (
    <>
      <p>Functional Stateful Component</p>
      <p>{message}</p>
      <button onClick={changeMessage}>Click Me</button>
    </>
  );
}
export default FunSt;
