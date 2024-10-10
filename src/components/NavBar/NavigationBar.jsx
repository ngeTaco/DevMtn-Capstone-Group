import { PokeballIcon } from "../CommonComponents/icons.jsx"
import LogoutButton from "./LogoutButton.jsx"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationBar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        navigate('/');
        const res = await axios.post('/api/auth/logout');
        if (res.data.success) {
            localStorage.removeItem('userdata');
            dispatch({
                type: 'RESET_USER'
            })
        }
    };

    const adminStatus = useSelector((state) => {
        return state.profileState.isAdmin
    })

    return (

        <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-7 scale-125">
                <PokeballIcon
                    className='size-8' />
                <span className="font-semibold text-xl tracking-tight">
                    PokéShop
                </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/shop"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">
                        Shop
                    </Link>
                    <Link to="/profile"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">

                        Profile
                    </Link>
                    {adminStatus && (
                        <Link to="/admin"

                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">

                            Admin
                        </Link>
                    )}
                </div>
                <div>
                    <LogoutButton
                        onLogout={handleLogout} />
                </div>
            </div>
        </nav>
    )
}