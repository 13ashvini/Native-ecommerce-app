// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


// type AuthState = {
//     tokenData: string | null
// }
// const getToken: any = async () => {
//     try {
//         const jsonValue = await AsyncStorage.getItem('access_token');
//         return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch (e) {
//         // error reading value
//     }
// };
// const removeToken: any = async () => {
//     try {
//         await AsyncStorage.removeItem('access_token')
//     } catch (e) {
//         // remove error
//     }
// }
// const initialState = {
//     tokenData: AsyncStorage.getItem('access_token') || null
// }
// const Authslice = createSlice({
//     name: 'auth',
//     initialState: initialState,
//     reducers: {
//         setAccessToken: (state, action) => (
//             state.tokenData = action.payload,
//             getToken()
//         ),
//         removeAccessToken: (state, action) => (
//             state.tokenData = action.payload,
//             removeToken()
//         ),
//     },
// })

// export const { setAccessToken, removeAccessToken } = Authslice.actions
// export default Authslice.reducer
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';


type AuthState = {
    tokenData: string | null;
};

const initialState: AuthState = {
    tokenData: null,
};

const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('access_token');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error('Error reading token:', e);
        return null;
    }
};

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('access_token');
    } catch (e) {
        console.error('Error removing token:', e);
    }
};

const Authslice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action: any) => {
            state.tokenData = action.payload;
        },
        removeAccessToken: (state) => {
            state.tokenData = null;
        },
    },
});

export const { setAccessToken, removeAccessToken } = Authslice.actions;

// Async action creators
export const setAccessTokenAsync = () => async (dispatch: Function) => {
    try {
        const token = await getToken();
        if (token) {
            dispatch(setAccessToken(token));
        }
    } catch (error) {
        console.error('Error setting access token:', error);
    }
};

export const removeAccessTokenAsync = () => async (dispatch: Function) => {
    try {
        await removeToken();
        dispatch(removeAccessToken());
    } catch (error) {
        console.error('Error removing access token:', error);
    }
};

export default Authslice.reducer;
