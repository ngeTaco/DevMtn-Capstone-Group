import Addcart from "../itembox components/Addcart"
import ItemName from "../itembox components/ItemName"
import Points from "../itembox components/points"
import Stock from "../itembox components/stock"
import { useDispatch } from "react-redux"

function Itembox(props) {
    const dispatch = useDispatch()
    const {imageUrl, itemName, itemPrice, quantity} = props.itemData
    function openModal() {
        dispatch({
            type: `HANDLE_MODAL`,
            payload: true
        })
    }

    return (
        <div className="group block overflow-hidden border space-x-5 border-gray-400 rounded-md" onClick={props.onClick}>
            <a role="button" onClick={openModal} className="block overflow-hidden">
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
export default Itembox