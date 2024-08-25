import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Postlist from './Components/postlist.jsx';
import CreatePost from './Components/Create Post.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Postlist /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);









/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './Components/Create Post.jsx';
import Postlist from './Components/postlist.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Postlist /> },
      { path: "/create-post", element: <CreatePost /> }
    ]
  }//go to app.jsx and if empty("/") it will show postlist and if ("/create-post") it will show createpost.jsx

]);//createBrowserRouter take an array and in this array we will add paths as object:{}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
*/