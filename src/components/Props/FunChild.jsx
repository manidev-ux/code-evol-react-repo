function FunChild(props) {
  return (
    <>
      <h5>Functional Child Component</h5>
      <h6>
        Name: {props.name} and Age: {props.age} and Color: {props.color}
      </h6>
    </>
  );
}
export default FunChild;
