import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEV_URL } from "../core/env/env"
import { RootState } from "../store/Store";
const BASE_URL = DEV_URL

export const apiAuthService = createApi({
    reducerPath: 'apiAuthService',
    // @ts-ignore
    tagTypes: ["restaurant", "featurePartner", "foodlist"],

    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async (headers, { getState }) => {
            const user = (getState() as RootState)?.auth.tokenData;
            if (user) {
                headers.set("Authorization", `Bearer ${user}`);
                // headers.set("Content-Type", "application/json");
            } else {
                console.warn("Token is missing or empty");
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default apiAuthService;