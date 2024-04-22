

import apiAuthService from "./apiAuthService";
const featuredPartnerService = apiAuthService.injectEndpoints({
    endpoints: (builder: any) => ({
        // GET ALL FEATURE PARTNER  LIST
        getAllFeaturePartnerList: builder.query({
            providesTags: ["featurePartner"],
            query: (body: any) => ({
                url: `/auth/get-featurepartner`,
                method: "POST",
                body,
            }),
        }),


    }),
});

// Corrected export
export const {
    useGetAllFeaturePartnerListQuery,

} = featuredPartnerService;