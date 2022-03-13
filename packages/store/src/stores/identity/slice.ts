import {
    AnyAction,
    createSlice,
    PayloadAction,
    ThunkAction,
} from "@reduxjs/toolkit";

import {setErrorMessage} from '../error/slice';
import {IExtraArgument, RootState} from "../../store";


export interface IdentitySliceState {
    email: string | null,
    password: string | null,
    jwt: string | null,
    refresh: string | null,
    status: string | null,
    loading: boolean,
}

export const initialState: IdentitySliceState = {
    email: null,
    password: null,
    jwt: null,
    refresh: null,
    status: null,
    loading: false,
}

export type SignInPayload = Omit<IdentitySliceState, "password">;

export const identitySlice = createSlice({
    name: 'identity',
    initialState: initialState,
    reducers: {
        loading: (state) => {
            state.loading = true;
        },
        signIn: (state, action: PayloadAction<SignInPayload>) => {
            state.email = action.payload.email;
            state.jwt = action.payload.jwt;
            state.refresh = action.payload.refresh;
            state.status = action.payload.status;
            state.loading = false;
        },
    },
});

export const { signIn, loading } = identitySlice.actions;

export const signInThunk = (email: string, password: string): ThunkAction<void, RootState, IExtraArgument, AnyAction> => async (dispatch, getState, extraArguments) => {
    const { api } = extraArguments;

    try {
        dispatch(loading());

        const data = await api.identity.signIn({
            email: email,
            password: password,
        });

        if (data.error) {
            dispatch(setErrorMessage({ message: data.error.message }));
        } else {
            dispatch(signIn({
                email: email,
                jwt: data.jwt,
                refresh: data.refresh,
                status: data.status,
                loading: false,
            }));
        }
    } catch(e) {
        console.error(e);
    }
}