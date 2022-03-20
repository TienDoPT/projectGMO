import { requestUser } from "../../service"
import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionsType"

const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
})

const fetchUserSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    data
})

const fetchUserError = () => ({
    type: FETCH_USER_ERROR,
})

export const loadUsers = () => async dispatch => {
    try {
        dispatch(fetchUserRequest())
        const response = await requestUser();
        dispatch(fetchUserSuccess(response?.data?.data))
    } catch (error) {
        console.log(error);
        dispatch(fetchUserError())
    }
}