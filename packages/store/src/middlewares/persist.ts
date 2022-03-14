import {AnyAction, Store} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {rootReducer} from "../store";

export const persist = (store: Store<ReturnType<typeof rootReducer>, AnyAction>) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    const result = next(action);
    const savedStore = store.getState().identity;

    sessionStorage.setItem('identity', JSON.stringify({ ...savedStore }));

    // TODO: remove it later
    localStorage.setItem("jwt", savedStore.jwt);

    return result;
};