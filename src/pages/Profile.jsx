import ShopperInventory from "../components/ProfilePage/ShopperInventory.jsx";
import ShopperProfile from "../components/ProfilePage/ShopperProfile.jsx";

function ProfilePage() {

    return (
        <div class="h-auto bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div class="container bg-white  shadow-lg mb-20   transform   duration-200 easy-in-out">
                <ShopperProfile />         
                <hr/>
                <ShopperInventory />
            </div>
        </div>
    )
}

export default ProfilePage