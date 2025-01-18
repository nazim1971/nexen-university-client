import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import { baseApi } from "./api/baseApi";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'auth',
    storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer); 

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);