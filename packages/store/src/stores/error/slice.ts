import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorSliceState {
    message: string | null;
}

export const initialState: ErrorSliceState = {
    message: null,
};

export type ErrorMessagePayload = ErrorSliceState;

export const errorSlice = createSlice({
    name: "error",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.message = null;
        },
        setErrorMessage: (
            state,
            action: PayloadAction<ErrorMessagePayload>
        ) => {
            state.message = action.payload.message;
        },
    },
});

export const { reset, setErrorMessage } = errorSlice.actions;
