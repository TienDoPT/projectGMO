import { SET_ERROR, SET_LOADING, SET_TOKEN, USER_LOGOUT, USER_SIGNUP } from "../actions/actionsType"

const initialState = {
    userToken: null,
    isLoading: false,
    error: false
}

export default loginReducer = (state = initialState, action) => {
    const { userToken, isLoading, error } = action
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, userToken, isLoading: false };
        case USER_LOGOUT:
            return { ...state, userToken: null };
        case SET_LOADING:
            return { ...state, isLoading };
        case USER_SIGNUP:
            return { ...state, userToken };
        case SET_ERROR:
            return { ...state, error, isLoading: false }
        default:
            return state
    }
}