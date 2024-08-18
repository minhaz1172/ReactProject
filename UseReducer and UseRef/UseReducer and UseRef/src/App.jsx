import React, { useReducer } from 'react'

import './App.css'
import UseReducer from './useReucer'
import UseREF from './useRef'

function App() {

  return (
    <>
      <div className="container">
        <h2>Usereducer hook example</h2>
        <UseReducer />
        <h2>UseRef Hook Example
        </h2>
        <UseREF />
      </div>


    </>
  )
}

export default App
