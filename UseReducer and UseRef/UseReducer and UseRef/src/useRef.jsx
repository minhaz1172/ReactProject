import React, { useRef, useState } from 'react';

function UseREF() {
  const [message, setMessage] = useState('');
  const inputOne = useRef();

  const handleClick = () => {
    if (inputOne.current.value.trim() === '') {
      console.log('value is not added');
      setMessage('Please input a value');
    } else {
      console.log('value is added');
      setMessage('Value is added');
    }
  };

  const getNumbox = (e) => {
    console.log('hello');
    console.log(inputOne.current.value);
    inputOne.current.setAttribute('placeholder', 'Enter value'); // Set placeholder
    inputOne.current.focus();
    inputOne.current.style.backgroundColor = 'lightyellow';
    inputOne.current.style.border = '2px solid blue';
    inputOne.current.style.fontWeight = 'bold';

    // Additional properties
    console.log('Width:', inputOne.current.offsetWidth); // Log the width
    inputOne.current.scrollTop = 10; // Scroll 10 pixels from the top
    inputOne.current.select(); // Select the input text
    inputOne.current.classList.add('highlight'); // Add a class
  };

  return (
    <div>
      <input
        type="text"
        ref={inputOne}
        style={{ padding: '3px', fontSize: '16px', backgroundColor: '#48dbfb' }}
      />
      <button onClick={(e) => { getNumbox(e); handleClick(); }} className='bt'>
        Input
      </button>
      <p>{message}</p> {/* The value of p tag will show whether a value is added or not */}
    </div>
  );
}

export default UseREF;
