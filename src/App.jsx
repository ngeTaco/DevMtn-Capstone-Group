import { Link, Outlet } from "react-router-dom"
import React from "react"
import LogoutButton from "./components/NavBar/LogoutButton"
import NavigationBar from "./components/NavBar/NavigationBar"

//LANDING PAGE, SERVES AS HEADER KINDA, DOES NOT MOVE, WE CAN CHANGE THIS LATER

function App() {

  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>

  )
}
//checkpoint is authenticate, update state to existing session
export default App