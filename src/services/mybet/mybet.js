import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../badRequestHandler/BedRequestHandler';

// Define the base API slice
export const mybet = createApi({
  reducerPath: 'mybet',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    mybet: builder.mutation({
      query: (body) => ({
        url: "v5/list-bt-ssn-mk",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useMybetMutation } = mybet;