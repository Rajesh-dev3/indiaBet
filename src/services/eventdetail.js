import { createApi,  } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from './badRequestHandler/BedRequestHandler';

// Define the base API slice
export const eventdetail = createApi({
  reducerPath: 'eventdetail',  // optional, for more advanced usage
  baseQuery: dynamicBaseQuery,
//    fetchBaseQuery({ baseUrl: '/api' }),  // Replace with your API URL
endpoints: (builder) => ({
    eventdetail: builder.mutation({
      query: (body) => ({
        url: "v5/event-detals",   // API endpoint for login
        method: 'POST',
        body  // Send user credentials
      }),
    }),
  }),
});

// Export the auto-generated hook for the `login` mutation
export const { useEventdetailMutation } = eventdetail;
