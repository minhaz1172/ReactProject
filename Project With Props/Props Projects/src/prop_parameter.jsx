function Prop1(props) {
  /*prop learnign that pass parameter to to child jsx file*/
  const Frontweblearn = ["HTML ", " CSS ", " BOOTSTRAP ", " JAVASCRIPT ", " REACT "]

  return (
    <>
      <h1 className="title">{props.title}</h1>
      <p className="fw-bold">{props.description}</p>
      <h4>The fundamental list form web development is :<p className="Front  ">{Frontweblearn}</p></h4>
    </>
  )

}
export default Prop1;