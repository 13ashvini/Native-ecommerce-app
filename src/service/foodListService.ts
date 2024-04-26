import apiAuthService from "./apiAuthService";
const foodService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        // GET ALL FOOD  LIST
        getAllFoodList: builder.query({
            providesTags: ["featurePartner"],
            query: () => ({
                url: `v1/api/get-foodtype-data`,
                method: "GET",

            }),
        }),


    }),
});

// Corrected export
export const {
    useGetAllFoodListQuery,

} = foodService;