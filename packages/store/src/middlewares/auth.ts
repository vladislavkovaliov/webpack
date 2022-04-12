import { AnyAction, Middleware } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { RootState } from "../store";

export const authMiddleware: Middleware<{}, RootState> =
    (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
        try {
            const { identity } = store.getState();
            const { jwt } = identity;

            localStorage.setItem("jwt", jwt!);
        } catch (e) {
            localStorage.clear();
        } finally {
            next(action);
        }
    };
