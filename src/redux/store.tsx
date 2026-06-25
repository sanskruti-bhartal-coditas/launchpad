import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../pages/Login/Login.services"
import { onboardHireApi } from "../layouts/ManagerDashboard/OnboardHire/OnboardHire.services";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        [onboardHireApi.reducerPath]:onboardHireApi.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(loginApi.middleware).concat(onboardHireApi.middleware)
    )
});