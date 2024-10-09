import { useDispatch } from "react-redux"
import Addcart from "../itembox components/Addcart.jsx"
import ItemName from "../itembox components/ItemName.jsx"
import Points from "../itembox components/Points.jsx"
import Stock from "../itembox components/Stock.jsx"


function Specialbox(props) {
    const dispatch = useDispatch()
    const { imageUrl, itemName, itemPrice, quantity } = props.itemData
    function openSpecialModal() {
        dispatch({
            type: `HANDLE_SPECIAL_MODAL`,
            payload: true
        })
    }

    return (
        <div className="justify-end m-7 mt-10 group block overflow-hidden border border-gray-400 rounded-md" onClick={props.onClick}>
            <a role="button" onClick={openSpecialModal} className="block overflow-hidden">
                <img
                    src={imageUrl}
                    alt=""
                    className="h-[250px] object-contain w-full rounded-t-md bg-slate-200 "
                />
                <div className="relative bg-white p-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg">
                            <ItemName
                                itemName={itemName}
                            />
                        </h3>
                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                            <Addcart
                                itemData={props.itemData}
                            />
                        </span>
                    </div>
                    <div className="flex justify-between mt-5">
                        <Points
                            itemPrice={itemPrice}
                        />
                        <Stock
                            quantity={quantity}
                        />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Specialbox