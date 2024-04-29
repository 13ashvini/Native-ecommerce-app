import apiAuthService from "./apiAuthService";
const foodService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        // GET ALL FOOD  LIST
        getAllFoodList: builder.query({
            providesTags: ["foodlist"],
            query: ({ id, foodName }: { id: string, foodName: string }) => ({
                url: `/v1/api/get-food-by-restaurant/${id}/${foodName}`,
                method: "GET",

            }),
        }),


    }),
});

// Corrected export
export const {
    useGetAllFoodListQuery,

} = foodService;