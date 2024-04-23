import { configureStore } from '@reduxjs/toolkit'
import apiAuthService from '../service/apiAuthService'
import authslice from '../Slice/authslice'
import featurePartnerSlice from '../Slice/featurePartnerSlice'
import restaurantListSlice from '../Slice/restaurantListSlice'
const store = configureStore({
    reducer: {
        auth: authslice,
        featurePartner: featurePartnerSlice,
        restaurantList: restaurantListSlice,
        [apiAuthService.reducerPath]: apiAuthService.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: apiAuthService,
            },
            serializableCheck: false,
        }).concat(apiAuthService.middleware),

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store