import {createSlice, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";


interface LoginSliceState {
    email: string | null,
    password: string | null,
    jwt: string | null,
    refresh: string | null,
    status: string | null,
    loading: boolean,
}

export const initialState: LoginSliceState = {
    email: null,
    password: null,
    jwt: null,
    refresh: null,
    status: null,
    loading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginLoading: (state) => {
            state.loading = true;
        },
        // TODO: rename to update()
        setEmailAndPassword: (state, action: PayloadAction<LoginSliceState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.jwt = action.payload.jwt;
            state.refresh = action.payload.refresh;
            state.status = action.payload.status;
            state.loading = false;
        },
    },
});

const { setEmailAndPassword, loginLoading } = loginSlice.actions;

export const doLogin = (email: string, password: string) => async (dispatch: ThunkDispatch<LoginSliceState, any, any>, arg: any) => {
    // dispatch(loginLoading());
    debugger;
    console.log('doLogin');
    // console.log(arg)
    // try {
    //
    //     const response = await fetch(process.env.REACT_APP_API_HOST, {
    //         method: "POST",
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         headers: {
    //             // @ts-ignore
    //             'Content-Type': 'application/json'
    //         },
    //         // @ts-ignore
    //         body: JSON.stringify({
    //             email: email,
    //             password: password,
    //         }),
    //     });
    //     const body = await response.json();
    //
    //     if (body?.status === 'success') {
    //        dispatch(setEmailAndPassword({
    //            email: email,
    //            password: password,
    //            jwt: body.jwt.access,
    //            refresh: body.jwt.refresh,
    //            status: body.status,
    //            loading: false,
    //        }))
    //     }
    // }
    // catch (e) {
    //     dispatch(setEmailAndPassword({
    //         email: null,
    //         password: null,
    //         jwt: null,
    //         refresh: null,
    //         status: null,
    //         loading: null,
    //     }))
    // }
}