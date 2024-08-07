import React from 'react';
import classNames from 'classnames';
import Container from './Container';
import styles from './item.module.css';

const FoodList = () => {
  const foodItems = ["chal", "dal", "meat", "fish"];

  return (
    <>
      <Container>
        <div>
          <h1 className="text-center">Healthy Food</h1>
          <ul className="list-group">
            {foodItems.map((item, index) => (
              <li key={index} className={classNames('list-group-item', styles.listGroupItem)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        This is about a healthy food list using child props container.
      </Container>
    </>
  );
};

export default FoodList;
