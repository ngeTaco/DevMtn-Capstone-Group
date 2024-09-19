import AdminInventoryRow from "./components/AdminInventoryPage/AdminInventoryRow.jsx";
import AdminInventoryTable from "./components/AdminInventoryPage/AdminInventoryTable.jsx";
import { useState, useEffect } from "react";
import axios from "axios";


function AdminInventory() {

  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const requestItems = axios.get('/api/all/inventory').then(({ data }) => {
      setAllItems(data)
    })
  },
    []
  )
  return (
    <div className="flex gap-6">
      < AdminInventoryTable
        allItems={allItems}
      />
      <div className="overflow-x-auto bg-white mx-10 my-16 shadow-sm rounded-lg p-6">
        <h2 className="mb-5 font-bold text-gray-900">Add New Item</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
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
              name="itemQuantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter item quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="itemDescription">Item Description</label>
            <textarea
              id="itemDescription"
              name="itemDescription"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter item description"
            ></textarea>
          </div>
          <div>
            <input type="checkbox" id="special" name="special" className="mr-2" />
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
    </div>
  );
}

export default AdminInventory;