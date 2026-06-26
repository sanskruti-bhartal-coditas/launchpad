import { createApi } from "@reduxjs/toolkit/query/react";
import { getFetchBaseQuery } from "../../../services/app.services";
import type { OnboardHireFormProps, OnboardHireResponse } from "./OnboardHire.types"

 export const onboardHireApi = createApi({
  reducerPath: 'onboardHireApi',
  baseQuery : getFetchBaseQuery,


  endpoints: (builder) => ({

    onboardHire : builder.mutation<OnboardHireResponse, OnboardHireFormProps>({
      query: (user) => ({
        url: 'auth/users',
        method: 'POST',
        body: user,
      }),
    })

  })
})

export const { useOnboardHireMutation } = onboardHireApi