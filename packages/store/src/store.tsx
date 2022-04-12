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
import { authMiddleware, persist } from "./middlewares";
import { Subject, IObserver } from "./pubSub";
import { IdentityErrorPayload, IdentityPayload } from "shared-types";

/**
 * Place to inject service if you'd like to share them.
 */
export interface IExtraArgument {
    api: {
        identity: IdentityApi;
        sonar: SonarApi;
    };
}

/**
 * Init EventBus
 */

export interface Registry {
    unregister: () => void;
}

export interface Callable {
    [key: string]: Function;
}

export interface Subscriber {
    [key: string]: Callable;
}

export interface IEventBus {
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: Function): Registry;
}

export class EventBus implements IEventBus {
    private readonly subscribers: Subscriber;
    private static nextId = 0;
    private static instance?: IEventBus = undefined;

    constructor() {
        this.subscribers = {};
    }

    public static getInstance(): IEventBus {
        if (this.instance === undefined) {
            this.instance = new EventBus();
        }

        return this.instance;
    }

    public dispatch<T>(event: string, arg?: T): void {
        const subscriber = this.subscribers[event];

        if (subscriber === undefined) {
            return;
        }

        Object.keys(subscriber).forEach((key) => subscriber[key](arg));
    }

    public register(event: string, callback: Function): Registry {
        const id = this.getNextId();

        if (!this.subscribers[event]) this.subscribers[event] = {};

        this.subscribers[event][id] = callback;

        return {
            unregister: () => {
                delete this.subscribers[event][id];
                if (Object.keys(this.subscribers[event]).length === 0) {
                    delete this.subscribers[event];
                }
            },
        };
    }

    private getNextId(): number {
        return EventBus.nextId++;
    }
}

export function initEventBus() {
    const register = EventBus.getInstance().register("42", (value: number) => {
        console.log(value);
    });

    const registerIdentity = EventBus.getInstance().register(
        "identity",
        (identity: IdentityPayload & IdentityErrorPayload) => {
            try {
                console.log(42);
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
}

initEventBus();

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

declare global {
    interface Window {
        __CORE: {
            addObserver: (observer: IObserver) => void;
        };
    }
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
