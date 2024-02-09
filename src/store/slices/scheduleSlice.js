import {rootApi} from "../apis/rootAPI.js";

const commonQueryConfig = {
    method: 'POST',
    cache: 'no-cache',
    redirect: 'follow',
};

export const scheduleSlice = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getRoles: builder.query({
            providesTags: ['Roles'],
            query: (obj) => ({
                ...commonQueryConfig,
                body: JSON.stringify(obj),
            }),
        }),
        getConfigs: builder.query({
            providesTags: ['Config'],
            query: (obj) =>({
                ...commonQueryConfig,
                body: JSON.stringify(obj)
            })
        }),
        getFullSchedule: builder.query({
            providesTags: ['Full'],
            query: (obj) =>({
                ...commonQueryConfig,
                body: JSON.stringify(obj)
            })
        })
    })
})



export const { useGetRolesQuery, useGetConfigsQuery } = scheduleSlice
