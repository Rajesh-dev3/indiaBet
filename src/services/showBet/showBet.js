// https://bigbetexchange.com/api/

import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../badRequestHandler/BedRequestHandler';

// Define the base API slice
export const ShowBet = createApi({
  reducerPath: 'ShowBet',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    ShowBet: builder.mutation({
      query: (body) => ({
        url: "v5/indiaBet-ShowBets",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
    userBetHistory: builder.mutation({
      query: (body) => ({
        url: "v5/India-Bets-History",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useShowBetMutation,useUserBetHistoryMutation } = ShowBet;
