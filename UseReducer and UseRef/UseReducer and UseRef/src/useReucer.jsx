import React, { useReducer } from 'react';

const initialstate = 0;

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 2;
  }
  else if (action.type === 'DECREMENT') {
    return state - 2;
  }
  else {
    return state;
  }
}


function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className='reducer'>
      <h4>the count value is:{state}</h4>
      <button className='btn btn-danger fw-bold inc' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className='btn btn-danger fw-bold dec' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>


    </div>
  )
}

export default UseReducer