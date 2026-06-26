import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../pages/Login/Login.services"
import { onboardHireApi } from "../layouts/ManagerDashboard/OnboardHire/OnboardHire.services";
import { authSlice } from "./authSlice";
import { getHiresApi } from "../layouts/ManagerDashboard/NewHireStats/NewHireStats.service";


export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        auth:authSlice.reducer,
        [onboardHireApi.reducerPath]:onboardHireApi.reducer,
        [getHiresApi.reducerPath]:getHiresApi.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(loginApi.middleware).concat(onboardHireApi.middleware).concat(getHiresApi.middleware)
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;