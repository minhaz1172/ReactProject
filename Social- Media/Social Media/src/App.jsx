import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/footer'
import Sidebar from './Components/Sidebar'

import Postlist from './Components/postlist'
import CreatePost from './Components/Create Post'

function App() {
  const [selecedTab, setSelectedTab] = useState("Home");

  return (
    <div className='app-container'>
      <Sidebar />
      <div className='components'>
        <Header />
        {selecedTab === "Home" ? (<Postlist />) : (<CreatePost />)}

        <Footer />
      </div>
    </div>
  )
}

export default App
