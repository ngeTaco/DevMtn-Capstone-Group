import { useDispatch } from "react-redux";
import { Minus, Plus, Trash } from "../CommonComponents/icons";

function ItemInCart(props) {
    const { imageUrl, itemName, itemPrice } = props.itemData.cartItemKey;
    const { quantity, total, id } = props.itemData; // add `id` for the item

    const dispatch = useDispatch();
    
    const minusOne = () => {
        console.log('Minus button clicked, itemId:', id); // Debug log
        dispatch({
            type: 'DECRIMENT_ITEM',
            payload: { itemId: id } 
        });
    };

    const plusOne = () => {
        console.log('Plus button clicked, itemId:', id); // Debug log
        dispatch({
            type: 'UPDATE_CART',
            payload: { itemId: id }
        });
    };

    const removeItem = () => {
        console.log('clicked remove')
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {itemId: id}
        })
    }

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
                    <button>
                        <Trash
                        className="size-8"
                        onClick={removeItem}
                        /> 
                    </button>
                    <p className="whitespace-nowrap">Total: {total}</p>
                </div>
            </li>
        </div>
    );
}

export default ItemInCart;
