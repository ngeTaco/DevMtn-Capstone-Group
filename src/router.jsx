import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Storefront from './Storefront.jsx'
import Login from './Login.jsx'
import ProfilePage from './Profile.jsx'
import AdminInventory from './AdminInventory.jsx'

export default function Router() {

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

    return <RouterProvider router={router} />
}