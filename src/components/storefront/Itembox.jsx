import Addcart from "../itembox components/addcart"
import ItemName from "../itembox components/ItemName"
import Points from "../itembox components/points"
import Stock from "../itembox components/stock"
import { useDispatch } from "react-redux"

function Itembox() {
    const dispatch = useDispatch()

    function openModal () {
        console.log('clicked')
        dispatch({
            type: `HANDLE_MODAL` ,
            payload: true
        }) 
    }

    return (

        
            <div className="group block overflow-hidden border space-x-5 border-gray-400 rounded-md">
                <a role="button" onClick={openModal} className="block overflow-hidden">
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df7u62z-c5464c1a-1712-465b-b903-5101339aefa2.png/v1/fill/w_1280,h_1281/transparent_poke_ball_by_ace_zeroartic_df7u62z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGY3dTYyei1jNTQ2NGMxYS0xNzEyLTQ2NWItYjkwMy01MTAxMzM5YWVmYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Wm-Wjfd_pubLg35WCNoDcr1gWL3p81YR-OQR2WbMcgE"
                        alt=""
                        className="h-[250px] object-contain w-full rounded-t-md bg-slate-200 " />

                    <div className="relative bg-white p-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg">
                                <ItemName/>
                            </h3>
                            <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                <Addcart/>
                            </span>
                        </div>
                        <div className="flex justify-between mt-5">
                            <Points/>
                            <Stock/>
                        </div>
                    </div>
                </a>
            </div>
       
    )
}
export default Itembox