import { configureStore } from '@reduxjs/toolkit'
import apiAuthService from '../service/apiAuthService'
// import authslice from '../Slice/authslice'
// import featurePartnerSlice from '../Slice/featurePartnerSlice'
// import restaurantListSlice from '../Slice/restaurantListSlice'
import rootReducer from './rootReducer'
import persistReducer from 'redux-persist/es/persistReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    // reducer: {
    //     auth: authslice,
    //     featurePartner: featurePartnerSlice,
    //     restaurantList: restaurantListSlice,
    //     [apiAuthService.reducerPath]: apiAuthService.reducer
    // },
    reducer: persistedReducer,
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