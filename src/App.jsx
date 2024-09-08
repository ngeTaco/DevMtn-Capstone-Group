import { Link, Outlet} from "react-router-dom"
import React from "react"

//LANDING PAGE, SERVES AS HEADER KINDA, DOES NOT MOVE, WE CAN CHANGE THIS LATER

function App() {

    return (
        <div>
          <nav className="flex space-x-4 px-8">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <p></p>
          <Outlet />
        </div>
        
      )
}

export default App