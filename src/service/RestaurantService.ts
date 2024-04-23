

import apiAuthService from "./apiAuthService";
const restaurantService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        // GET ALL FEATURE PARTNER  LIST
        getAllRestaurantList: builder.query({
            providesTags: ["restaurant"],
            query: (body: any) => ({
                url: `res/api/get-restaurantItem`,
                method: "POST",
                body,
            }),
        }),


    }),
});

// Corrected export
export const {
    useGetAllRestaurantListQuery,

} = restaurantService;