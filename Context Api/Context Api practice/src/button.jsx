import React, { useContext } from 'react'
import Component from './component';
import { counterContext } from './Context/context';

function Button() {
  const counter = useContext(counterContext);
  return (
    <div>
      {/*her counbter.setcout written beacuse of passing object from app.jsx if i pass only param,eter i woould not write this  */}
      <button className='btn btn-primary mt-3 ' onClick={() => counter.setCount((count) => count + 1)}>  <span> <Component /></span> <span className='text-warning fw-bold'>Click Me</span></button>
    </div>
  )
}

export default Button;