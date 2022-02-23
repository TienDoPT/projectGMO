import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userToken: null,
    userName: null,
    userEmail: null,
    isLoading: true
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, email, token } = action.payload
            state.userEmail = email
            state.userName = name
            state.userToken = token
            state.isLoading = false
        },
        logOut: (state) => {
            state.userEmail = null
            state.userName = null
            state.userToken = null
            state.isLoading = false
        },
        register: (state, action) => {
            const { name, email, token } = action.payload
            state.userEmail = email
            state.userName = name
            state.userToken = token
            state.isLoading = false
        },
        retrieveToken: (state, action) => {
            state.userToken = action.payload
            state.isLoading = false
        }
    }
})

export const { logOut, register, retrieveToken, login } = authSlice.actions
export default authSlice.reducer