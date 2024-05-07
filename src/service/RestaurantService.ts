

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
                url: `/res/api/detail-restaurant/${id}`,
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
        // ADD RESTAURANT SERVICE API-
        // addRestaurant: builder.mutation({
        //     providesTags: ["restaurant"],
        //     query: (formData: FormData) => ({
        //         url: `/res/api/add-RestaurantPartner`,
        //         method: "POST",
        //         body: formData,
        //         Headers: {
        //             "Content-Type": "form-data",

        //         }

        //     }),
        // }),
        addRestaurant: builder.mutation({
            invalidatesTags: ["restaurant"],
            query: (formData: FormData) => ({
                url: `/res/api/add-RestaurantPartner`,
                method: "POST",
                body: formData,
                // Don't set Content-Type header for FormData, it's handled automatically
            }),
        }),
    }),
});

// Corrected export
export const {
    useGetAllRestaurantListQuery,
    useGetRestaurantByIdQuery,
    useGetRestaurantCategoryByIdQuery,
    useAddRestaurantMutation

} = restaurantService;