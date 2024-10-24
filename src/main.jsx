
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer position="bottom-right"  autoClose={500}/>
    <App />
  </Provider>,
)
