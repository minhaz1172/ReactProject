import React from 'react';
import styles from './Calculator.module.css';

const Calculator = (props) => {
  const buttonContainer = ['AC', '1', '2', '3', '.', '4', '5', '6', '+', '7', '8', '9', '-', '*', '0', '/'];

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" value={props.displayvalue} readOnly /> {/* readonly ensures that value will not put by keyboard without button click*/}
      <div className={styles.btnContainer}>
        {buttonContainer.map((buttonName, index) => (
          <button key={index} className={styles.btn} onClick={() => { props.onButtonclick(buttonName) }}>
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
