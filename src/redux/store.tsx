import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../pages/Login/Login.services"
import { onboardHireApi } from "../layouts/ManagerDashboard/OnboardHire/OnboardHire.services";
// import { getUserDataApi } from "../services/getUserData.services"


export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        [onboardHireApi.reducerPath]:onboardHireApi.reducer,
        // [getUserDataApi.reducerPath]:getUserDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(loginApi.middleware).concat(onboardHireApi.middleware)
        // .concat(getUserDataApi.middleware)
    )
});