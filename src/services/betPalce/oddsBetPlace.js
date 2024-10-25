// api/v5/save-bet



import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../badRequestHandler/BedRequestHandler';

// Define the base API slice
export const oddsBetsPlace = createApi({
  reducerPath: 'oddsBetsPlace',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    oddsBetsPlace: builder.mutation({
      query: (body) => ({
        url: "v5/save-bet",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
    fancyBetsPlace: builder.mutation({
      query: (body) => ({
        url: "v5/save-ssn-bet",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useOddsBetsPlaceMutation,useFancyBetsPlaceMutation } = oddsBetsPlace;
