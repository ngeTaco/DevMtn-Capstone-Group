import { useDispatch } from "react-redux";
import { Minus, Plus } from "../CommonComponents/icons";

function ItemInCart(props) {
    const { imageUrl, itemName, itemPrice } = props.itemData.cartItemKey;
    const { quantity, total, id } = props.itemData; // add `id` for the item

    const dispatch = useDispatch();
    
    const minusOne = () => {
        dispatch({
            type: 'DECRIMENT_ITEM',
            payload: { itemId: id } // Pass the `itemId`
        });
    };

    const plusOne = () => {
        dispatch({
            type: 'UPDATE_CART',
            payload: { itemId: id } // Pass the `itemId`
        });
    };

    return (
        <div className="flex flex-col text-lg ml-8">
            <li className="flex items-center space-x-9 mt-5">
                <div className="flex flex-col items-center">
                    <img src={imageUrl} alt={itemName} className="w-12 h-12" />
                    <input
                        type="number"
                        id="minimum"
                        min="1"
                        value={quantity} // Use `value` instead of `placeholder`
                        className="mt-2 border rounded-md p-0.5 w-16 text-center"
                        readOnly
                    />
                    <div className="flex space-x-5">
                        <Minus
                            className="size-8"
                            onClick={minusOne}  
                        />
                        <Plus
                            className="size-8" 
                            onClick={plusOne}
                        />
                    </div>
                </div>
                <div className="flex flex-col text-lg">
                    <p>{itemName}</p>
                    <p>{itemPrice}</p>
                    <p className="whitespace-nowrap">Total: {total}</p>
                </div>
            </li>
        </div>
    );
}

export default ItemInCart;
