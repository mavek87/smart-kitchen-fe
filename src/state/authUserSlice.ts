import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {AuthUser} from "../types";

const initialState: AuthUser = {
    username: null,
    email: null,
    isLoggedIn: false
}

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        loginAuthUser: (state, action: PayloadAction<AuthUser>) => {
            state.username = action.payload.username
            state.email = action.payload.email
            state.isLoggedIn = action.payload.isLoggedIn
        },
        logoutAuthUser: (state) => {
            state.username = initialState.username
            state.email = initialState.email
            state.isLoggedIn = initialState.isLoggedIn
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginAuthUser, logoutAuthUser } = authUserSlice.actions

export default authUserSlice.reducer