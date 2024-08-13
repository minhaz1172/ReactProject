import React, { useReducer } from 'react';

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 2;
    case 'DECREMENT':
      return state - 2;
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className='reducer'>
      <h4>the count value is:{state}</h4>
      <button className='btn btn-danger fw-bold inc' onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button className='btn btn-danger fw-bold dec' onClick={() => dispatch("DECREMENT")}>Decrement</button>


    </div>
  )
}

export default UseReducer