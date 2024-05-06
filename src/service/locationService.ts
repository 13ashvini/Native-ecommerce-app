import apiAuthService from "./apiAuthService";

const authService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        //   ADD LOCATION------------------------------------>>
        addLocation: builder.mutation({
            // @ts-ignore
            // invalidatesTags: ["login"],
            query: (body: any) => ({
                url: `/v2/api/addlocation`,
                method: "POST",
                body
            }),
        }),


    }),
    overrideExisting: false,

})
export const {
    useAddLocationMutation,

} = authService