import React, { useState } from 'react';
import styles from './State.module.css';
import classNames from 'classnames';

const StateREACT = () => {
  const [items, setItems] = useState(['Apple', 'Mango', 'JackFruit', 'PineApple']);
  const [newFruit, setNewFruit] = useState('');
  const [message, setMessage] = useState('');

  const addFruit = () => {
    if (newFruit.trim() !== '') {
      setItems([...items, newFruit]); // Add new fruit to the list
      setMessage(`${newFruit} is added`); // Update the message
      setNewFruit(''); // Reset the input field
    }
    else {
      setMessage('Please add Fruit name');
    }
  };

  return (
    <>
      <div className="Container">
        <div>
          <h1>My Fruit List</h1>
          <input
            type="text"
            placeholder="Enter Text here"
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
          />
          <button className={styles.Addbutton} onClick={addFruit}>
            Add Fruit
          </button>
          <p>{message}</p> {/* Display the message here */}
        </div>

        <ul className={classNames('list-group', styles.listGroup)}>
          {items.map((item, index) => (
            <li key={index} className={classNames('list-group-item', styles.listGroupItem)}>
              {item}
              <button className={`${styles.button} btn fw-bold`}>Buy</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StateREACT;
