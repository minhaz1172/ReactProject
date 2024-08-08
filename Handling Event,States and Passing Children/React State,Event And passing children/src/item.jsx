import React from 'react';
import classNames from 'classnames';/* we should use the className liabrary to apply bootstrap and css module combinely */
import Container from './Container';
import styles from './item.module.css';
import Foodinput from './Foodinput.jsx';

const FoodList = () => {
  const foodItems = ["chal", "dal", "meat", "fish"];
  const handleClick = (item) => {
    console.log(`${item} is bought`);
    alert(`${item} is clicked`);
  }

  return (
    <>
      <Container>
        <div>
          <Foodinput />
          <ul className="list-group">
            {foodItems.map((item, index) => (
              <li key={index} className={classNames('list-group-item', styles.listGroupItem)}>
                {item}
                <button className={`${styles.button} btn fw-bold`} onClick={() => handleClick(item)}
                >
                  Buy</button>
              </li>
            ))}
          </ul>
        </div>
      </Container >

      <Container>
        This is about a healthy food list using child props container.
      </Container>
    </>
  );
};

export default FoodList;
