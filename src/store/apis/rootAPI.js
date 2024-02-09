import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_SCHEDULE_API });

export const rootApi = createApi({
    reducerPath: 'REST',
    baseQuery,
    // tagTypes: ['User'],
    endpoints: (builder) => ({}),
});
