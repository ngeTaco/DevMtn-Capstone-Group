import { Outlet } from "react-router-dom"
import React, { useEffect } from "react"
import NavigationBar from "./components/NavBar/NavigationBar"
import { useDispatch } from "react-redux"

function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdata"));
    if (user) {
      dispatch({
        type: 'SET_USER',
        payload: user
      })

      dispatch({
        type: 'SET_IS_ADMIN',
        payload: user.isAdmin
      })
    }
  })

  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>

  )
}

export default App