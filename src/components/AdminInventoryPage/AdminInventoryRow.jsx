import { useState, useRef } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";

function AdminInventoryRow(props) {
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const [itemName, setItemName] = useState(props.item.itemName);
    const [itemDescription, setItemDescription] = useState(props.item.itemDescription);
    const [itemPrice, setItemPrice] = useState(props.item.itemPrice);
    const [itemQuantity, setItemQuantity] = useState(props.item.quantity);
    const [isSpecial, setIsSpecial] = useState(props.item.isSpecialItem ? "True" : "False");

    async function handleSave() {
        setIsEditing(false);

        const updatedItemData = {
            itemName,
            itemDescription,
            itemPrice: parseFloat(itemPrice),
            quantity: parseInt(itemQuantity),
            isSpecialItem: isSpecial === "True"
        };

        try {
            const { data } = await axios.put(`/api/inventory/${props.item.itemId}`, updatedItemData);
            console.log('Item updated successfully:', data);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    }

    async function handleDelete() {
        setIsEditing(false);

        try {
            await axios.delete(`/api/inventory/${props.item.itemId}`);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
        dispatch({
            type: "DELETE_ITEM",
            payload: props.item.itemId
        })
    }


    return (
        <tr className="hover:bg-gray-50">
            <th className="px-6 py-4 text-sm text-gray-500">{props.item.itemId}</th>
            {isEditing ?
                <>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        <input value={itemName} onChange={(e) => setItemName(e.target.value)} className="max-w-14" placeholder="Name" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        <input value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} placeholder="Description" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        <input value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} className="max-w-10" placeholder="Price" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        <input value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} className="max-w-16" placeholder="Quantity" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        <input checked={isSpecial === "True"} onChange={(e) => setIsSpecial(e.target.checked ? "True" : "False")} className="max-w-3" type="checkbox" />
                    </td>
                    <td>
                        <button onClick={handleSave}>
                            Save
                        </button>
                    </td>
                    <td>
                        <button onClick={handleDelete} className="ml-2 text-red-600">
                            Delete
                        </button>
                    </td>
                </>
                :
                <>
                    <td className="px-6 py-4 text-sm text-gray-500">{itemName}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{itemDescription}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{itemPrice}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{itemQuantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{isSpecial}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" />
                        </button>
                    </td>
                </>
            }
        </tr>
    );
}

export default AdminInventoryRow;