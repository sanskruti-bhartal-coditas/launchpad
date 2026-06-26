import { createApi } from "@reduxjs/toolkit/query/react";
import { getFetchBaseQuery } from "../../../services/app.services";
import type { AssignTask } from "../AssignTaskModal/AssignTaskModal.types"
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
    
    assignTask: builder.mutation<void, AssignTask>({
      query: (task) => {
        // hireId is not needed in the request body
        const { hireId, ...body } = task;
        return {
          url: `hires/${hireId}/tasks`,
          method: 'POST',
          body: body,
        };
      }
    })
  })
});

export const { useGetHiresQuery, useAssignTaskMutation } = getHiresApi;