import { Provider, useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from './stores/login/slice';
import { BrowserRouter, Routes } from 'react-router-dom';


export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export function useStore() {
    const login = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    return {
        /** Login slice and actions. */
        login,
        setEmailAndPassword: (payload: any) => dispatch(loginSlice.actions.setEmailAndPassword(payload)),
    }
}

export function StoreProvider({ children }: { children: JSX.Element }) {
    return (
        <Provider store={store}>
                {children}
        </Provider>
    )
}