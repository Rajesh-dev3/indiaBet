import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../badRequestHandler/BedRequestHandler';

// Define the base API slice
export const matchPnl = createApi({
  reducerPath: 'matchPnl',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    matchPnl: builder.mutation({
      query: (body) => ({
        url: "v5/matches-list-indiabet",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
    matchPnlInner: builder.mutation({
      query: (body) => ({
        url: "v5/Match-Pnl-India-Bet",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useMatchPnlMutation ,useMatchPnlInnerMutation } = matchPnl;
