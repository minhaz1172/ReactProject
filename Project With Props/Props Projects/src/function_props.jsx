import React from 'react';
import ReceivePropsFun from './ReceivePropsFun';

const FunctionProps = () => {
  const butn = () => {
    alert("Function passed via props");
  };

  return (
    <>
      <ReceivePropsFun handleClick={butn} />
    </>
  );
};

export default FunctionProps;
