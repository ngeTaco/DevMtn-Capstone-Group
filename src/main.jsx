import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import globalStore from './store/store.js'
import { Provider } from 'react-redux'
import Router from './router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < Provider store={globalStore}>
      <Router />
    </Provider>
  </React.StrictMode>,
)