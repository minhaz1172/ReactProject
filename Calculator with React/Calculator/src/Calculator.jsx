import React from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const buttonContainer = ['C', '1', '2', '3', '.', '4', '5', '6', '+', '7', '8', '9', '-', '*', '0', '/'];

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.btnContainer}>
        {buttonContainer.map((buttonName, index) => (
          <button key={index} className={styles.btn}>
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
