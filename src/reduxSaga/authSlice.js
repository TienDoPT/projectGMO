// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     userToken: null,
//     isLoading: false
// }

// export const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             const {  token } = action.payload
//             state.userToken = token
//             state.isLoading = false
//         },
//         logOut: (state) => {
//             state.userToken = null
//             state.isLoading = false
//         },
//         register: (state, action) => {
//             const { token } = action.payload
//             state.userToken = token
//             state.isLoading = false
//         },
//         retrieveToken: (state, action) => {
//             state.userToken = action.payload
//             state.isLoading = false
//         },
//         loading: (state, action) => {
//             state.isLoading = action.payload
//         }
//     }
// })

// export const { logOut, register, retrieveToken, login, loading } = authSlice.actions

// export const selectUser = (state) => state.user

// export default authSlice.reducer