import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../pages/Login/Login.services"

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(loginApi.middleware)
    )
});