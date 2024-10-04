import { useDispatch } from "react-redux"


function Addcart(props) {

    const dispatch = useDispatch()



    function cartAdd (event) {
        event.stopPropagation() //makes the default unresponsive, so we can have our add to cart button, super cool.
        console.log('add to cart')
        
        dispatch({
            type: `UPDATE_CART`,
            payload: props.itemData
        })
    }

    return (
        <span onClick={cartAdd}className="text-blue-500 hover:underline hover:underline-offset-2">
                                Add to Cart
        </span>
    )
}

export default Addcart