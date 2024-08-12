import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { counterContext } from './Context/context'

function App() {
  const [count, setCount] = useState(0)
  //i want to pass count value from app.jsx to component.jsx using conetxt api no pop drilling

  return (
    <>
      <counterContext.Provider value={count}> {/* by provider value the value can acces navbar.jsx and button.jsx  can access value from navbar.jsx*/}

        <Navbar />
      </counterContext.Provider>
    </>
  )
}

export default App
