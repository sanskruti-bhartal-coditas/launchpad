import { createApi } from "@reduxjs/toolkit/query/react";
import { getFetchBaseQuery } from "../../../services/app.services";
import type { Hire } from "./NewHireStats.types"

export const getHiresApi = createApi({
  reducerPath: 'getHiresApi',
  baseQuery: getFetchBaseQuery,
  endpoints: (builder) => ({
    getHires: builder.query<Hire[], void>({
      query: () => ({
        url: 'hires',
        method: 'GET',
      }),
    }),
    
  })
});

export const { useGetHiresQuery } = getHiresApi;