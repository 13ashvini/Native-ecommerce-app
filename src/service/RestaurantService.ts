

import apiAuthService from "./apiAuthService";
const restaurantService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        // GET ALL RESTAURANTS  LIST
        getAllRestaurantList: builder.query({
            providesTags: ["restaurant"],
            query: (body: any) => ({
                url: `res/api/get-restaurantItem`,
                method: "POST",
                body,
            }),
        }),
        // GET RESTAURANT BY ID
        getRestaurantById: builder.query({
            providesTags: ["restaurant"],
            query: (id: string) => ({
                url: `/res/api/detail-restaurantItem/${id}`,
                method: "GET",

            }),
        }),
        // GET RESTAURANT CATEGORY BY ID-
        getRestaurantCategoryById: builder.query({
            providesTags: ["restaurant"],
            query: (id: string) => ({
                url: `/v3/api/detail-Foodtype/${id}`,
                method: "GET",

            }),
        }),
    }),
});

// Corrected export
export const {
    useGetAllRestaurantListQuery,
    useGetRestaurantByIdQuery,
    useGetRestaurantCategoryByIdQuery

} = restaurantService;