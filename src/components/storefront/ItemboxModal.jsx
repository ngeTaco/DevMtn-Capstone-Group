import ItemName from "../itembox components/ItemName";
import Points from "../itembox components/points";
import Stock from "../itembox components/stock";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



function ItemboxModal(props) {
  const dispatch = useDispatch()

  function modalOpen () {
    console.log('opened')
    dispatch({
      type:`HANDLE_MODAL`,
      payload: false
    })
  }
  
  const itemModal = useSelector((accessState) => {
    return (accessState.globalState.itemModal)
    
  }) 
  console.log(itemModal)
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
            <ItemName />
            <Stock />
          </div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df7u62z-c5464c1a-1712-465b-b903-5101339aefa2.png/v1/fill/w_1280,h_1281/transparent_poke_ball_by_ace_zeroartic_df7u62z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGY3dTYyei1jNTQ2NGMxYS0xNzEyLTQ2NWItYjkwMy01MTAxMzM5YWVmYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Wm-Wjfd_pubLg35WCNoDcr1gWL3p81YR-OQR2WbMcgE"
            className="h-[250px] w-[250px] content-center  "
          ></img>
          <p className="m-3 text-center italic "> A tool used for catching wild POKéMON.</p>
          <div className="flex ml-80">
          
            
            <Points />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemboxModal