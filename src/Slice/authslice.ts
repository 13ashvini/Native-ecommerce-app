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

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('access_token');
        return token || null;
    } catch (e) {
        console.error('Error reading token:', e);
        return null;
    }
};

const initialState: AuthState = {
    tokenData: null,
};

const Authslice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.tokenData = action.payload;
        },
        removeAccessToken: (state) => {
            state.tokenData = null;
        },
    },
});

// Asynchronous action creator to initialize the token
export const initializeToken = () => async (dispatch: any) => {
    try {
        const token = await getToken();
        dispatch(setAccessToken(token));
    } catch (error) {
        console.error('Error initializing token:', error);
    }
};

export const { setAccessToken, removeAccessToken } = Authslice.actions;

export default Authslice.reducer;

