const initialState = {
    isLoggedIn: false,
    isAdmin: false,
    userProfile: {},
}

export default function profileReducer(state = initialState, action) {

    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                userProfile: action.payload
            }

        case "RESET_USER":
            return {
                ...state,
                userProfile: initialState.userProfile
            }

        case "SET_IS_ADMIN":
            return {
                ...state,
                isAdmin: action.payload
            }

        case "SET_USER_HISTORY":
            return {
                ...state,
                userHistory: action.payload
            }

        default:
            return state
    }
}