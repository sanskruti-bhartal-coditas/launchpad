// import { createApi } from "@reduxjs/toolkit/query/react";
// import { getFetchBaseQuery } from "../services/app.services";

// interface User {
//   id: string,
//   email: string,
//   name: string,
//   role: string,
//   managerId: string | null,
// }

export async function getUserData() {
  try {
    const token = JSON.parse(localStorage.getItem('accessToken')??"")

    const response = await fetch("https://xhkrpfff-5000.inc1.devtunnels.ms/auth/me",{
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error.message);
  }
}

//  export const getUserDataApi = createApi({
//   reducerPath: 'getUserDataApi',
//   baseQuery : getFetchBaseQuery,

//   endpoints: (builder) => ({

//     getUserData : builder.query<User, void>({
//       query: () => ({
//         url: 'auth/me',
//       })
//     })
//   })
// })

// export const { useGetUserDataQuery } = getUserDataApi