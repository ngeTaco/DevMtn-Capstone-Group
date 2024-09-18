import AdminInventoryRow from "./AdminInventoryRow"

function AdminInventoryTable() {
    return (
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
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider">Is Special</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-900 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
              <AdminInventoryRow />
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default AdminInventoryTable;