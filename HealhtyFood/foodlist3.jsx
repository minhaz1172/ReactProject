function FoodList3()
/*now we will make foofdlist by ternary oprator with map method  as we cant  write if else method in jsx reuturn option*/ {
  const fooditems = ["chal", "dal", "meat", "fish"];


  return (
    <>
      <h4>Now we will convert an array to list by map method <p className="text-primary">with conditional rendering ternary operator</p> by this we can code easier </h4>
      <h1>Healthy Food</h1>
      {fooditems && fooditems.length > 0 ? (
        <ul className="list-group">
          {fooditems.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>
      ) : (
        <p>No food items available</p>
      )}
    </>
  );
}

export default FoodList3;
