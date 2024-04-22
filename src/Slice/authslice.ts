import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type AuthState = {
    tokenData: string | null
}
const getToken: any = async () => {
    try {
        return await AsyncStorage.getItem('access_token')
    } catch (e) {
        // read error
    }
};
const removeToken: any = async () => {
    try {
        await AsyncStorage.removeItem('access_token')
    } catch (e) {
        // remove error
    }
}
const initialState = {
    tokenData: AsyncStorage.getItem('access_token')
}
const Authslice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => (
            state.tokenData = action.payload,
            getToken()
        ),
        removeAccessToken: (state, action) => (
            state.tokenData = action.payload,
            removeToken()
        ),
    },
})

export const { setAccessToken, removeAccessToken } = Authslice.actions
export default Authslice.reducer