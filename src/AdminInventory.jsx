function AdminInventory() {
  return (
    <div class="flex gap-6">
      <div>
        <div className="overflow-x-auto bg-white mx-10 my-16 shadow-sm rounded-lg">
          <h2 className="mb-5 font-bold">Inventory</h2>
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Id</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Name</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Description</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Price</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Quantity</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">1</th>
                <td className="px-6 py-4 text-sm text-gray-500">Cy Ganderton</td>
                <td className="px-6 py-4 text-sm text-gray-500">This item is cool item</td>
                <td className="px-6 py-4 text-sm text-gray-500">$15.00</td>
                <td className="px-6 py-4 text-sm text-gray-500">4</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">2</th>
                <td className="px-6 py-4 text-sm text-gray-500">Sophi Biles</td>
                <td className="px-6 py-4 text-sm text-gray-500">Recruiting Manager</td>
                <td className="px-6 py-4 text-sm text-gray-500">2/12/2021</td>
                <td className="px-6 py-4 text-sm text-gray-500">Maroon</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">3</th>
                <td className="px-6 py-4 text-sm text-gray-500">Florida Garces</td>
                <td className="px-6 py-4 text-sm text-gray-500">Web Developer IV</td>
                <td className="px-6 py-4 text-sm text-gray-500">5/31/2020</td>
                <td className="px-6 py-4 text-sm text-gray-500">Purple</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto bg-white shadow-sm rounded-lg mx-10">
          <h2 className="mb-5 font-bold">Special Items</h2>
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Id</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Name</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Description</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Price</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Quantity</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">1</th>
                <td className="px-6 py-4 text-sm text-gray-500">Cy Ganderton</td>
                <td className="px-6 py-4 text-sm text-gray-500">This item is cool item</td>
                <td className="px-6 py-4 text-sm text-gray-500">$15.00</td>
                <td className="px-6 py-4 text-sm text-gray-500">4</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">2</th>
                <td className="px-6 py-4 text-sm text-gray-500">Sophi Biles</td>
                <td className="px-6 py-4 text-sm text-gray-500">Recruiting Manager</td>
                <td className="px-6 py-4 text-sm text-gray-500">2/12/2021</td>
                <td className="px-6 py-4 text-sm text-gray-500">Maroon</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-4 text-sm text-gray-500">3</th>
                <td className="px-6 py-4 text-sm text-gray-500">Florida Garces</td>
                <td className="px-6 py-4 text-sm text-gray-500">Web Developer IV</td>
                <td className="px-6 py-4 text-sm text-gray-500">5/31/2020</td>
                <td className="px-6 py-4 text-sm text-gray-500">Purple</td>
                <td><img width="20" height="20" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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