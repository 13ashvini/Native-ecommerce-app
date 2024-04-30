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

        // GET  FOOD  DETAIL BY ID
        getFoodDetailById: builder.query({
            providesTags: ["foodlist"],
            query: (id: string) => ({
                url: `/v1/api/detail-Food-list/${id}`,
                method: "GET",

            }),
        }),
    }),
});

// Corrected export
export const {
    useGetAllFoodListQuery,
    useGetFoodDetailByIdQuery
} = foodService;