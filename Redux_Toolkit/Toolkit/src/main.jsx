import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './App/store.js'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}  >
    <StrictMode>
      <App />

    </StrictMode>,
  </Provider>
)
