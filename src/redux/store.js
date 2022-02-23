import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './authSlice'
import { fetchApi } from './fetchApi'

export default store = configureStore({
    reducer: {
        [fetchApi.reducerPath]: fetchApi.reducer,
        user: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchApi.middleware),
})

setupListeners(store.dispatch)