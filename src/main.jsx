import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Storefront from './Storefront.jsx'
import Login from './Login.jsx'
import ProfilePage from './Profile.jsx'
import AdminInventory from './AdminInventory.jsx'
import globalStore from './store/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/shop' element={<Storefront />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/admin' element={<AdminInventory />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < Provider store={globalStore}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
