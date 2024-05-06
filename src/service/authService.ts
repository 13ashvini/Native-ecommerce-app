import apiAuthService from "./apiAuthService";

const authService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        //   REGISTER USER------------------------------------>>
        registerUser: builder.mutation({
            // @ts-ignore
            // invalidatesTags: ["login"],
            query: (body: any) => ({
                url: `/user/signup`,
                method: "POST",
                body
            }),
        }),
        //   LOGIN USER------------------------------------>>
        loginUser: builder.mutation({
            // @ts-ignore
            // invalidatesTags: ["login"],
            query: (body: any) => ({
                url: `/user/login`,
                method: "POST",
                body
            }),
        }),
        //   LOGIN USER------------------------------------>>
        forgotPassword: builder.mutation({
            // @ts-ignore
            // invalidatesTags: ["login"],
            query: (body: any) => ({
                url: `/user/login`,
                method: "POST",
                body
            }),
        })

    }),
    overrideExisting: false,

})
export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation
} = authService