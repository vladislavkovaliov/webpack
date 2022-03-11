import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LoginSliceState {
    email: string | null,
    password: string | null,
    jwt: string | null,
    refresh: string | null,
    status: string | null,
}

export const initialState: LoginSliceState = {
    email: null,
    password: null,
    jwt: null,
    refresh: null,
    status: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setEmailAndPassword: (state, action: PayloadAction<{email?: string; password?: string, jwt?: string, refresh?: string, status: string}>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.jwt = action.payload.jwt;
            state.refresh = action.payload.refresh;
            state.status = action.payload.status
        },
    },
});