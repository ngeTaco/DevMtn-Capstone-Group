import { Outlet } from "react-router-dom"
import React from "react"
import NavigationBar from "./components/NavBar/NavigationBar"

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