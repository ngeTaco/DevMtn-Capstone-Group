import { useEffect } from "react";
import axios from "axios";
import ShopperInventory from "../components/ProfilePage/ShopperInventory.jsx";
import ShopperProfile from "../components/ProfilePage/ShopperProfile.jsx";
import AddPointsButton from "../components/ProfilePage/AddPoints.jsx";
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {

    const dispatch = useDispatch()

    // fetch user history when shopper navigates to profile page
    const userInfo = useSelector((state) => {
        return state.profileState.userProfile
    })

    useEffect(() => {
        async function fetchUserHistory() {
            try {
                const response = await axios.get(`/api/history/${userInfo.userId}`);
                const userHistory = response.data;

                dispatch({
                    type: 'SET_USER_HISTORY',
                    payload: userHistory
                });
            } catch (error) {
                console.error("Error fetching user history:", error);
            }
        }
        if (userInfo.userId) {
            fetchUserHistory();
        }
    }, [userInfo.userId, dispatch])


    const addPoints = async () => {
        const updatedPoints = userInfo.points + 10000;

        try {
            // Update user points in database
            await axios.put(`/api/user/${userInfo.userId}/points`, { points: updatedPoints });

            // Update user points in redux
            dispatch({
                type: 'SET_USER',
                payload: { ...userInfo, points: updatedPoints }
            });
        } catch (error) {
            console.error('Error updating points on profile page:', error);
        }
    };

    const loginStatus = useSelector((state) => {
        return state.profileState.userProfile
    })

    if (!loginStatus || Object.keys(loginStatus).length === 0) return null;

    return (
        <div className="h-auto bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div className="container bg-white  shadow-lg mb-20   transform   duration-200 easy-in-out">
                <ShopperProfile />
                <hr />
                <ShopperInventory />
                <AddPointsButton
                    addPoints={addPoints}
                />
            </div>
        </div>
    )
}

export default ProfilePage