import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/actionsType"

const initialState = {
    isLoading: false,
    success: false,
    data: null
}

export default usersReducer = (state = initialState, action) => {
    const { data } = action
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, isLoading: true }
        case FETCH_USER_SUCCESS:
            return { ...state, isLoading: false, data }
        case FETCH_USER_ERROR:
            return { ...state, isLoading: false }
        default:
            return state
    }
}