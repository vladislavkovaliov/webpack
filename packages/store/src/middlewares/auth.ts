import {AnyAction, Store} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {rootReducer} from "../store";

export const authMiddleware = (store: Store<ReturnType<typeof rootReducer>, AnyAction>) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
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