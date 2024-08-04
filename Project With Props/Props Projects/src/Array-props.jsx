import React from 'react';
import styles from './Array-props.module.css';

const ArrayPassProp = (props) => {
  return (
    <>
      {/* now we will add css module to style css module is important that this willremove dependdency from global css */}
      {/*we have to name module.css with the same name as jsx file */}
      <li className={`list-group-item ${styles.backend}`}>{props.backendlist}</li>
    </>
  );
};

export default ArrayPassProp;
