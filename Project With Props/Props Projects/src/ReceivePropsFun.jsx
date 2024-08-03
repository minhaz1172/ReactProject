import React from 'react';

const ReceivePropsFun = (props) => {
  return (
    <>
      <button className="propfunction mt-4 border-success text-warning fw-bold" onClick={props.handleClick}>Function click</button>
    </>
  );
};

export default ReceivePropsFun;