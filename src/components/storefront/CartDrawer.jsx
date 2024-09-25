import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { XMark } from "../CommonComponents/icons"


function CartDrawer() {
    const dispatch = useDispatch()

    function closeDrawer() {
        console.log('closed')
        dispatch({
            type: `HANDLE_DRAWER`,
            payload: false
        })
    }
    const drawer = useSelector((accessState) => {
        return (accessState.globalState.cartDrawer)
    })
    if (!drawer) return null



    return (
        <div className="bg-slate-200 ">
            <XMark role="button" class="flex mr "/>
                <button onClick={closeDrawer}>
                    <input id="drawer-toggle" className="mr-20" />
                </button>
            </div>
        
    )
}

export default CartDrawer