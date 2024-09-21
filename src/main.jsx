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

//now that the global store is surrounding the router, we can pass redux info to it.
//in router.jsx each route can validate if they are in admin role or not similar to 
// loggedin in ratings.routes.js 