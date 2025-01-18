import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import { baseApi } from "./api/baseApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;