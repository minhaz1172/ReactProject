import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [calVal, setVal] = useState('');



  return (
    <>
      <Calculator displayvalue={calVal} onButtonclick={() => console.log("button is clicked")} />

    </>
  )
}

export default App
