import { isAllOf } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function AdminInventoryAddItem() {

    const dispatch = useDispatch()


    const [addingItem, setAddingItem] = useState({
        itemName: "",
        itemPrice: "",
        itemQuantity: "",
        itemDescription: "",
        isSpecial: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
       
        console.dir(itemPriceRef.current.value)
        const formData =
        {
            itemName: itemName.current.value,
            itemPrice: itemPrice.current.value,
            itemQuantity: itemQuantity.current.value,
            itemDescription: itemDescription.current.value,
            isSpecial: isSpecial.current.checked
        }
    }
    ////ADD REFS TO EACH OF THE ITEMS////

    const itemNameRef = useRef(null);
    const itemPriceRef = useRef(null);
    const itemQuantityRef = useRef(null);
    const itemDescriptionRef = useRef(null);
    const isSpecialRef = useRef(null);



    return (
        <div className="overflow-x-auto bg-white mx-10 my-16 shadow-sm rounded-lg p-6">
            <h2 className="mb-5 font-bold text-gray-900">Add New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemName">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        ref={itemNameRef}
                        name="itemName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        placeholder="Enter item name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemPrice">Item Price</label>
                    <input
                        type="number"
                        id="itemPrice"
                        ref={itemPriceRef}
                        name="itemPrice"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        placeholder="Enter item price"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemQuantity">Item Quantity</label>
                    <input
                        type="number"
                        id="itemQuantity"
                        ref={itemQuantityRef}
                        name="itemQuantity"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        placeholder="Enter item quantity"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemDescription">Item Description</label>
                    <textarea
                        id="itemDescription"
                        ref={itemDescriptionRef}
                        name="itemDescription"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        placeholder="Enter item description"
                    ></textarea>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="special"
                        ref={isSpecialRef}
                        name="special"
                        className="mr-2" />
                    <label className=" text-sm font-medium text-gray-900" htmlFor="special">Is Special</label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminInventoryAddItem;