/* now we will use map method .by this we can convert  an array to <list> */
const FoodList2 = () => {
  const fooditems = ["chal", "dal", "meat", "fish"];

  return (
    <>
      <h4>Now we will convert an array to list by map method by this we can code easier </h4>
      <h1>healthy Food</h1>
      <ul className="list-group">
        {fooditems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>

    </>
  )
}
export default FoodList2