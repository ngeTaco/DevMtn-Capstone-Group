import { PokeballIcon, XMark } from "../CommonComponents/icons.jsx"
import LogoutButton from "./LogoutButton.jsx"
import { Link } from "react-router-dom"

export default function NavigationBar() {

    return (
        <nav class="flex items-center justify-between flex-wrap bg-slate-700 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-7 scale-125">
                <PokeballIcon />
                <span class="font-semibold text-xl tracking-tight">PokéShop</span>
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
                    <Link to="/admin"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-300 mr-4">
                        Admin
                    </Link>
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
        </nav>
    )
}