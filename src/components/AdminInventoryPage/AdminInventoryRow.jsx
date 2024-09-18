import { useState } from "react";

function AdminInventoryRow() {

    const [isEditing, setIsEditing] = useState(false);


    return (
        <tr className="hover:bg-gray-50">
            <th className="px-6 py-4 text-sm text-gray-500">1</th>
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-14" placeholder="Name" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">Charizard</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input placeholder="Description" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">Extremely fierce and basically an auto-win.</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-10" placeholder="Price" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">500 points</td>
            }
            {isEditing ?
                <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-16" placeholder="Quantity" /></td>
                :
                <td className="px-6 py-4 text-sm text-gray-500">1</td>
            }
            {isEditing ?
            <td className="px-6 py-4 text-sm text-gray-500"><input className="max-w-3" type="checkbox" /></td>
            :
            <td className="px-6 py-4 text-sm text-gray-500">False</td>
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