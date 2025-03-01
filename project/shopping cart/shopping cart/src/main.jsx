import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store  from '/src/redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.rander(
  <provider store={store}>
    <App />
  </provider>
)
