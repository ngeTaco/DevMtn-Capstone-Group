import AdminInventoryRow from "./components/AdminInventoryPage/AdminInventoryRow.jsx";
import AdminInventoryTable from "./components/AdminInventoryPage/AdminInventoryTable.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminInventoryAddItem from "./components/AdminInventoryPage/AdminInventoryAddItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "./store/globalReducer.js"


function AdminInventory() {
  const dispatch = useDispatch()
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    dispatch(getAllItems)
    const requestItems = axios.get('/api/all/inventory').then(({ data }) => {
      setAllItems(data)
    })
  },
    []
  )
  const adminStatus = useSelector((state) => {
    return state.globalState.isAdmin
  })

  if (!adminStatus) return null;

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