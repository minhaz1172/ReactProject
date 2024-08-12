import React, { useContext } from 'react'
import { counterContext } from './Context/context'

function Component() {
  const counter = useContext(counterContext);
  return (

    <div>
      {counter}
    </div>
  )
}

export default Component