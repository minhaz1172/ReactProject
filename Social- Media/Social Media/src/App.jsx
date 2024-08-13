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
  let content;
  if (selecedTab === 'Home') {
    content = <Postlist />
  }
  else {
    content = <CreatePost />
  }

  return (
    <div className='app-container'>
      <Sidebar />
      <div className='components'>
        <Header />
        {content}
        <Footer />
      </div>
    </div>
  )
}

export default App
