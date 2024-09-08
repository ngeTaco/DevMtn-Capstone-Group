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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/shop' element={<Storefront/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
