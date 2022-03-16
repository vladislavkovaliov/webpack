import { AnyAction, Middleware } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { RootState } from "../store";

export const persist: Middleware<{}, RootState> =
    (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
        const result = next(action);
        const savedStore = store.getState().identity;

        sessionStorage.setItem("identity", JSON.stringify({ ...savedStore }));

        // TODO: remove it later
        localStorage.setItem("jwt", savedStore.jwt!);

        return result;
    };
