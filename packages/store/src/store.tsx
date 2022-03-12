import { Provider, useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, doLogin } from './stores/login/slice';
import thunkMiddleware  from 'redux-thunk';

// TODO: define index.ts for api
import { LoginApi } from './apis/login';

// import { API_HOST } from "../constants/envrionment";

// console.log(API_HOST)
// const url = process.env.REACT_APP_API_HOST;
console.log(process.env)
/**
 * Place to inject service if you'd like to share them.
 */
const thunkMiddlewareWithArg = thunkMiddleware.withExtraArgument({
    loginApi: new LoginApi('asf'),
})

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
    middleware: [thunkMiddlewareWithArg],
});

export type RootState = ReturnType<typeof store.getState>;

export function useStore() {
    const login = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    return {
        /** Login slice and actions. */
        login,
        doLogin: (email: string, password: string) => {
            debugger;
        },
        setEmailAndPassword: (payload: any) => dispatch(loginSlice.actions.setEmailAndPassword(payload)),
    }
}

export function useLogin() {
    const dispatch = useDispatch();

    return {
        signIn: () => {
            console.log('signIn')
        }
    }
}

export function StoreProvider({ children }: { children: JSX.Element }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}