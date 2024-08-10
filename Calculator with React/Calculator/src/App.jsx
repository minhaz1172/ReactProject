import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [calVal, setVal] = useState('');

  const onbutton = (buttonText) => {
    if (buttonText === 'AC') {
      setVal('')
    }
    else if (buttonText === '=') {
      const result = eval(calVal);//mathmathical expression evalued by eval method
      setVal(result);
    }
    else {
      const newvalue = calVal + buttonText;
      setVal(newvalue);
    }

  }



  return (
    <>
      <Calculator displayvalue={calVal} onButtonclick={onbutton} />

    </>
  )
}

export default App
