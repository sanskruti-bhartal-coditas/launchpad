import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getFetchBaseQuery =  fetchBaseQuery({
    baseUrl: "https://xhkrpfff-5000.inc1.devtunnels.ms/",
    prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("accessToken") ?? "null");
    
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
})