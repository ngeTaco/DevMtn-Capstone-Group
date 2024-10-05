import { PokeballIcon } from "../CommonComponents/icons.jsx"
import LogoutButton from "./LogoutButton.jsx"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavigationBar() {

    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('userdata');
        const res = await axios.post('/api/auth/logout');
        if (res.data.success) {
            navigate('/');
        }
    };

    const adminStatus = useSelector((state) => {
        return state.globalState.isAdmin
    })

    return (
        <nav class="flex items-center justify-between flex-wrap bg-slate-700 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-7 scale-125">
                <PokeballIcon />
                <span class="font-semibold text-xl tracking-tight">
                    PokéShop
                </span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to="/shop"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">
                        Shop
                    </Link>
                    <Link to="/profile"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">
                        Profile
                    </Link>
                    {adminStatus && (
                        <Link to="/admin"
                            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">
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