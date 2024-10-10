import { useDispatch } from "react-redux"


function Addcart(props) {

    const dispatch = useDispatch()



    function cartAdd(event) {
        event.stopPropagation() //makes the default unresponsive, so we can have our add to cart button, super cool.

        dispatch({
            type: `UPDATE_CART`,
            payload: props.itemData
        })
    }

    return (
        <span
            onClick={cartAdd}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-700 border-slate-700 hover:border-transparent hover:text-white hover:bg-slate-700 mt-4 lg:mt-0">
            Add to Cart
        </span>
    )
}

export default Addcart