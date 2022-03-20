// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import authSlice from './authSlice'

import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import { watcherSaga } from "../sagas/rootSaga";
import createSagaMiddleware from 'redux-saga'
import usersReducer from "../reducers/usersReducer";
import thunk from "redux-thunk";

// export default store = configureStore({
//     reducer: {
//         user: authSlice,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false
//         })

// })

// setupListeners(store.dispatch)

const reducer = combineReducers({
    login: loginReducer,
    users: usersReducer,
});

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, thunk];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;