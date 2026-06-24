import { createApi } from "@reduxjs/toolkit/query/react";
import { getFetchBaseQuery } from "../../../services/app.services";
import type { OnboardHireFormProps } from "./OnboardHire.types"

 export const onboardHireApi = createApi({
  reducerPath: 'onboardHireApi',
  baseQuery : getFetchBaseQuery,

  endpoints: (builder) => ({

    onboardHire : builder.mutation<void, OnboardHireFormProps>({
      query: (user) => ({
        url: 'hires',
        method: 'POST',
        body: user,
      })
    })
  })
})

export const { useOnboardHireMutation } = onboardHireApi