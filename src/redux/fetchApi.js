import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://reqres.in'

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUserLogin: builder.query({
            query: (user) => ({
                url: '/api/login',
                method: 'POST',
                body: user
            })
        }),
        getUserSignIn: builder.query({
            query: (user) => ({
                url: '/api/register',
                method: 'POST',
                body: user
            })
        })
    }),
})


export const { useGetUserLoginQuery, useGetUserSignInQuery } = fetchApi