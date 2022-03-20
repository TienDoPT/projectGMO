import { SET_LOADING, SET_TOKEN, USER_LOGIN, USER_LOGOUT, USER_SIGNUP, SET_ERROR } from "./actionsType"

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading
})

export const userLogin = ({ email, password }) => ({
    type: USER_LOGIN,
    email,
    password
})

export const userLogOut = () => ({
    type: USER_LOGOUT,
})

export const userSignUp = ({ email, password }) => ({
    type: USER_SIGNUP,
    email,
    password
})

export const setToken = (userToken) => ({
    type: SET_TOKEN,
    userToken
})

export const setError = (error) => ({
    type: SET_ERROR,
    error
})


