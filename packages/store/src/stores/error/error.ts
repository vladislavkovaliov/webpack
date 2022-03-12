import {createSlice, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";


export interface ErrorSliceState {
    message: string | null;
}

export const initialState: ErrorSliceState = {
    message: null,
}

export const errorSlice = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.message = null;
        },
        setErrorMessage: (state, action: PayloadAction<ErrorSliceState> ) => {
            state.message = action.payload.message;
        },
    },
});

const { reset, setErrorMessage } = errorSlice.actions;
