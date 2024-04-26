import { combineReducers } from "@reduxjs/toolkit";
import authslice from "../Slice/authslice";
import featurePartnerSlice from "../Slice/featurePartnerSlice";
import restaurantListSlice from "../Slice/restaurantListSlice";
import apiAuthService from "../service/apiAuthService";

const rootReducer = combineReducers({
    auth: authslice,
    featurePartner: featurePartnerSlice,
    restaurantList: restaurantListSlice,
    [apiAuthService.reducerPath]: apiAuthService.reducer,
})
export default rootReducer