import FunChild from "./FunChild";
function FunPar() {
  return (
    <>
      <h5>This is Functional Parent component</h5>
      <FunChild name="John" age={30} color="blue" />
      <FunChild name="Jane" age={25} color="green" />
      <FunChild name="Doe" age={35} color="red" />
    </>
  );
}
export default FunPar;
