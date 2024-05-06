import apiAuthService from "./apiAuthService";

const authService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        //   REGISTER USER------------------------------------>>
        addUserOrder: builder.mutation({
            // @ts-ignore
            invalidatesTags: ["order"],
            query: (body: any) => ({
                url: `/v4/api/add-order`,
                method: "POST",
                body
            }),
        }),
        //GET USER   ORDER LIST ------------------------------------>>
        getUserOrderList: builder.query({
            // @ts-ignore
            providesTags: ["order"],
            query: () => ({
                url: `/v4/api/get-order`,
                method: "GET",

            }),
        })

    }),
    overrideExisting: false,

})
export const {
    useAddUserOrderMutation,
    useGetUserOrderListQuery
} = authService