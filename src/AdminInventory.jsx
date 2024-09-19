import AdminInventoryRow from "./components/AdminInventoryPage/AdminInventoryRow.jsx";
import AdminInventoryTable from "./components/AdminInventoryPage/AdminInventoryTable.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminInventoryAddItem from "./components/AdminInventoryPage/AdminInventoryAddItem.jsx";


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
      < AdminInventoryAddItem />
    </div>
  );
}

export default AdminInventory;