import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import FoodList from '../foodlist1'
import FoodList2 from '../foodlist2'
import FoodList3 from '../foodlist3'

function App() {


  return (
    <>
      <FoodList />
      <FoodList2 />
      <FoodList3 />
    </>
  )
}

export default App
