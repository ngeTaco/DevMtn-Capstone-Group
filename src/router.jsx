import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Storefront from './pages/Storefront.jsx'
import Login from './pages/Login.jsx'
import ProfilePage from './pages/Profile.jsx'
import AdminInventory from './pages/AdminInventory.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


export default function Router() {

    const router = createBrowserRouter(

        createRoutesFromElements(
            <Route path='/' element={<App />} errorElement={<ErrorPage />}>
                <Route path='/' element={<Login />} />
                <Route path='/admin' element={<AdminInventory />} />
                <Route path='/shop' element={<Storefront />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}
