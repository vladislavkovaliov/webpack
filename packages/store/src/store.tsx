import { Provider, useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { BrowserRouter } from "react-router-dom";

import {AnyAction, configureStore} from "@reduxjs/toolkit";

/**
 * Slice importing place
 */
import {signInThunk, identitySlice} from './stores/identity/slice';
import {errorSlice} from "./stores/error/slice";
import {attackChainsSlice, fetchAttackChains} from "./stores/attackChains/slice";

import thunkMiddleware  from 'redux-thunk';

import {IdentityApi, SonarApi} from './apis';
import {Dispatch} from "redux";

/**
 * Place to inject service if you'd like to share them.
 */
export interface IExtraArgument {
    api: {
        identity: IdentityApi,
        sonar: SonarApi,
    }
}

const thunkMiddlewareWithArg = thunkMiddleware.withExtraArgument<IExtraArgument>({
    api: {
        identity: new IdentityApi(process.env.API_HOST),
        sonar: new SonarApi(process.env.API_HOST),
    },
})

export const authMiddleware = (store: any) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    try {
        const { identity } = store.getState();
        const { jwt } = identity;

        localStorage.setItem("jwt", jwt);
    } catch (e) {
        localStorage.clear();
    }
    finally {
        next(action);
    }
}

export const store = configureStore({
    reducer: {
        identity: identitySlice.reducer,
        error: errorSlice.reducer,
        attackChains: attackChainsSlice.reducer,
    },
    middleware: [thunkMiddlewareWithArg, authMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

// TODO: export into diff folder
export function useStore(name: keyof RootState) {
    const extractedStore = useSelector<RootState>((state) => state[name]);

    return {
        [name]: extractedStore,
    };
}

export function useIdentity() {
    const identity = useSelector<RootState>((state) => state.identity);
    const dispatch = useDispatch();

    return {
        identity,
        signIn: (email: string, password: string) => dispatch(signInThunk(email, password)),
    };
}

export function useAttackChains() {
    const attackChains = useSelector<RootState>((state) => state.attackChains);
    const dispatch = useDispatch();

    return {
        attackChains,
        // TODO: implement passing params
        fetchAttackChains: () => dispatch(fetchAttackChains()),
    }
}


// TODO: export into somewhere
export function StoreProvider({ children }: { children: JSX.Element }) {
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
}