import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/footer';
import Sidebar from './Components/Sidebar';
import Postlist from './Components/postlist';
import CreatePost from './Components/Create Post';
import PostlistProvider from './store/postliststore';

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  let content;
  if (selectedTab === 'Home') {
    content = <Postlist />;
  } else {
    content = <CreatePost />;
  }

  return (
    <PostlistProvider>
      <div className='app-container'>
        <Sidebar select={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='components'>
          <Header />
          {content}
          <Footer />
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
