import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [calVal, setVal] = useState('');

  const onbutton = (buttonText) => {
    console.log(buttonText);

  }



  return (
    <>
      <Calculator displayvalue={calVal} onButtonclick={onbutton} />

    </>
  )
}

export default App
