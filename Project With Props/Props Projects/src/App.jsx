import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Prop.css'
import Prop1 from './prop_parameter'
import PropMain from './propmain';
import FunctionProps from './function_props'

function App() {


  return (
    <>
      <div className='container'>
        <Prop1 title="FontEnd Basics" description="This is the list you should learn to be a frontend devloper" /> {/*passing multiple parameter to the child jsx file via props*/}

        {/*Now we learn object passign via props */}
        <PropMain title1="Backend Fundamental" />
        <FunctionProps />
      </div>



    </>
  )
}

export default App
