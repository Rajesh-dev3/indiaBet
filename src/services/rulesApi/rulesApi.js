
import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../badRequestHandler/BedRequestHandler';

// Define the base API slice
export const rules = createApi({
  reducerPath: 'rules',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    getRules: builder.query({
      query: (body) => ({
        url: "/v5/getRulesIndiaBet",   // API endpoint for login
        method: 'GET',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useGetRulesQuery } = rules;
