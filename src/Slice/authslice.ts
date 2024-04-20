import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type AuthState = {
    token: string | null
}

const Authslice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setAccessToken: (state, action) => (
            state.token = action.payload
        )
    },
})


export default Authslice.reducer