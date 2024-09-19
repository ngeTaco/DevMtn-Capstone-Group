import { useState } from "react";


function AdminInventoryRow(props) {
    console.log(props)

    const [isEditing, setIsEditing] = useState(false);


    return (
        <tr className="hover:bg-gray-50">
            <th className="px-6 py-4 text-sm text-gray-500">{props.item.itemId}</th>
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-14" placeholder="Name" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">{props.item.itemName}</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input placeholder="Description" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">{props.item.itemDescription}</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-10" placeholder="Price" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">{props.item.itemPrice}</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-16" placeholder="Quantity" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">{props.item.quantity}</td>
            }
            {isEditing ?
            <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-3" type="checkbox" /></td>
            :
            <td className="px-6 py-4 text-sm text-gray-500">{props.item.isSpecialItem ? "True" : "False"}</td>
        }
        
            {!isEditing ?
            <td>
                <button onClick={() => { setIsEditing(true) }}>
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" />
                </button>
            </td>
            :
            <td>
                <button onClick={() => { setIsEditing(false) }}>
                    Save
                </button>
            </td>
}
        </tr>
    )
}

export default AdminInventoryRow;