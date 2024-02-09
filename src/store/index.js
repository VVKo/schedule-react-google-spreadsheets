import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import userReducer from './slices/userSlice'
import {rootApi} from "./apis/rootAPI.js";

const store = configureStore({
    reducer:{
        userState: userReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(rootApi.middleware)
    },
    devTools: true
})

setupListeners(store.dispatch);

export {store}
