// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// L
// console.log("Dev_BaseUrl", DEV_URL)
// const apiAuthService = createApi({
//     // tagTypes: ['Tamang Food Service'],
//     baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//     endpoints: () => ({}),

// })

// export default apiAuthService
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEV_URL } from "../core/env/env"
const BASE_URL = DEV_URL

export const apiSlice = createApi({
    reducerPath: 'apiAuthService',
    // @ts-ignore
    tagTypes: ["archd"],

    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // prepareHeaders: async (headers, { getState }) => {
        //     const user = (getState() as RootState)?.authSlice?.token;
        //     if (user) {
        //         headers.set("Authorization", `Bearer ${user}`);
        //         // headers.set("Content-Type", "application/json");
        //     } else {
        //         console.warn("Token is missing or empty");
        //     }
        //     return headers;
        // },
    }),
    endpoints: () => ({}),
});

export default apiSlice;