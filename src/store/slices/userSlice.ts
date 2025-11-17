import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    authState: boolean;
    loginModal: boolean;
}

const initialState: IAuthState = {
    authState: false,
    loginModal: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<boolean>) => {
            state.authState = action.payload;
        },
        setLoginModalState: (state, action: PayloadAction<boolean>) => {
            state.loginModal = action.payload;
        },
    },
});

export const { setAuthState } = authSlice.actions;
export const { setLoginModalState } = authSlice.actions;
export const authReducer = authSlice.reducer;
