import { Provider } from "react-redux";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

/**
 * Slice importing place
 */
import { identitySlice, IdentitySliceState } from "./stores/identity/slice";
import { errorSlice } from "./stores/error/slice";
import { attackChainsSlice } from "./stores/attackChains/slice";

import thunkMiddleware from "redux-thunk";

import { IdentityApi, SonarApi } from "./apis";
import { IdentityErrorPayload, IdentityPayload } from "shared-types";

import { EventBus } from "./utils";

/**
 * Place to inject service if you'd like to share them.
 */
export interface IExtraArgument {
    api: {
        identity: IdentityApi;
        sonar: SonarApi;
    };
}

export function initEventBus(window: Window) {
    const registerIdentity = EventBus.getInstance().register(
        "identity",
        (identity: IdentityPayload & IdentityErrorPayload) => {
            try {
                sessionStorage.setItem("identity", JSON.stringify(identity));
                localStorage.setItem("jwt", identity.jwt);
            } catch (e) {
                sessionStorage.clear();
                localStorage.clear();
            } finally {
                // todo something...
            }
        }
    );

    // TODO: declare global for this
    // @ts-ignore
    window.__APP__ = {
        EventBus: {
            getInstance: EventBus.getInstance(),
        },
    };
}

initEventBus(window);

export const thunkMiddlewareWithArg =
    thunkMiddleware.withExtraArgument<IExtraArgument>({
        api: {
            identity: IdentityApi.getInstance(process.env.API_HOST!),
            sonar: new SonarApi(process.env.API_HOST!),
        },
    });

export const rootReducer = combineReducers({
    identity: identitySlice.reducer,
    error: errorSlice.reducer,
    attackChains: attackChainsSlice.reducer,
});

let initialState = {
    identity: identitySlice.getInitialState(),
    attackChains: attackChainsSlice.getInitialState(),
    error: errorSlice.getInitialState(),
};

try {
    const identity: IdentityPayload = sessionStorage.getItem("identity")
        ? JSON.parse(sessionStorage.getItem("identity")!)
        : {};

    EventBus.getInstance().dispatch<IdentityPayload>("identity", identity);
} catch (e) {
    console.error(e);
    sessionStorage.clear();
    localStorage.removeItem("jwt");
}

export function createStore() {
    sessionStorage.clear();
    localStorage.clear();

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: [thunkMiddlewareWithArg],
    });

    return store;
}

export type RootState = ReturnType<typeof rootReducer>;

// TODO: export into somewhere
export function StoreProvider({ children }: { children: JSX.Element }) {
    return (
        <Provider store={createStore()}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
}

export { useReduxStore, useIdentity, useAttackChains } from "./hooks";
export { IdentityApi } from "./apis";
export { EventBus } from "./utils";
