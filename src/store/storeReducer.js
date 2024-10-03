const initialState = {
    cartItems: [{
        "itemId": 1,
        "itemName": "Pokeball",
        "itemDescription": "A tool used for catching wild POKéMON.",
        "itemPrice": 200,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
        "quantity": 200,
        "isSpecialItem": false
    }]
}

export default function storeReducer(state = initialState, action) {
    //console.log(action)
    //console.log(state)

    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(action.payload)


        default: return state
        
    }
}
