import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getFetchBaseQuery =  fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("accessToken") ?? "null");
    
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
})