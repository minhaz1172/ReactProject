import React, { useContext } from 'react'
import { counterContext } from './Context/context'

function Component() {
  const counter = useContext(counterContext);
  return (

    <div>
      <h5>the current value is: {counter.count}</h5> {/* here counter.count written beacuse of passing object from app.jsx */}
    </div>
  )
}

export default Component