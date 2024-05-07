import apiAuthService from "./apiAuthService";

const profileService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        //   ADD LOCATION------------------------------------>>
        getProfileDetail: builder.query({
            // @ts-ignore
            providesTags: ["profile"],
            query: (body: any) => ({
                url: `/user/profile`,
                method: "GET",
                body
            }),
        }),
        //   UPDATE LOCATION------------------------------------>>
        updateProfileSetting: builder.mutation({
            // @ts-ignore
            invalidatesTags: ["profile"],
            query: (body: any) => ({
                url: `/user/updated-user`,
                method: "PUT",
                body
            }),
        }),
        updatePasswordSetting: builder.mutation({
            // @ts-ignore
            invalidatesTags: ["profile"],
            query: (body: any) => ({
                url: `/user/change-password`,
                method: "PUT",
                body
            }),
        }),
    }),
    overrideExisting: false,

})
export const {
    useGetProfileDetailQuery,
    useUpdateProfileSettingMutation,
    useUpdatePasswordSettingMutation

} = profileService