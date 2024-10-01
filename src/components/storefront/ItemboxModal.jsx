import ItemName from "../itembox components/ItemName";
import Points from "../itembox components/points";
import Stock from "../itembox components/stock";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



function ItemboxModal(props) {
  const dispatch = useDispatch()
  console.log("modalProps", props)
  function modalOpen() {

    dispatch({
      type: `HANDLE_MODAL`,
      payload: false
    })
  }

  const itemModal = useSelector((accessState) => {
    return (accessState.globalState.itemModal)

  })

  if (!itemModal) return null


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={modalOpen}
          >
            &times;
          </button>
        </div>

        <div className="mt-2.5 mb-2 flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between w-72 items-center">
            <ItemName
              itemName={props.item.itemName}
            />
            <Stock
              quantity={props.item.quantity}
            />
          </div>
          <img src={props.item.imageUrl}
            className="h-[250px] w-[250px] content-center  "
          ></img>
          <p className="m-3 text-center italic ">
            {props.item.itemDescription}
          </p>
          <div className="flex ml-80">
            <Points
              itemPrice={props.item.itemPrice}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemboxModal