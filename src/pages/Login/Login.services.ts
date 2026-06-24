import { createApi } from "@reduxjs/toolkit/query/react";
import { getFetchBaseQuery } from "../../services/app.services";
import type { LoginInterface } from "./Login.types";

 export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery : getFetchBaseQuery,

  endpoints: (builder) => ({

    login : builder.mutation<void, LoginInterface>({
      query: (user) => ({
        url: 'auth/login',
        method: 'POST',
        body: user,
      })
    })
  })
})

export const { useLoginMutation } = loginApi