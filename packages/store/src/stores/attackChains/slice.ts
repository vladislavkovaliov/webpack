import {
    AnyAction,
    createSlice,
    PayloadAction,
    ThunkAction,
} from "@reduxjs/toolkit";
import { IExtraArgument, RootState } from "../../store";
import { setErrorMessage } from "../error/slice";
import { IAttackPathModel } from "shared-types";

export interface AttackChainsSliceState {
    data: IAttackPathModel[];
    limit: number | null;
    total_items: number | null;
    total_items_per_passfail: number | null;
    status: string | null;
    loading: boolean;
}

export const initialState: AttackChainsSliceState = {
    data: [],
    limit: null,
    total_items: null,
    total_items_per_passfail: null,
    status: null,
    loading: false,
};

// data - models[] - model - data - AttackChains
export const attackChainsSlice = createSlice({
    name: "attackChains",
    initialState: initialState,
    reducers: {
        loading: (state) => {
            state.loading = true;
        },
        reset: (state) => {
            state.data = [];
        },
        set: (state, action: PayloadAction<AttackChainsSliceState>) => {
            state.data = action.payload.data;
            state.limit = action.payload.limit;
            state.total_items = action.payload.total_items;
            state.total_items_per_passfail =
                action.payload.total_items_per_passfail;
            state.status = action.payload.status;
            state.loading = action.payload.loading;
        },
    },
});

export const { reset, loading, set } = attackChainsSlice.actions;

export const fetchAttackChains =
    (): ThunkAction<void, RootState, IExtraArgument, AnyAction> =>
    async (dispatch, getState, extraArguments) => {
        const { api } = extraArguments;

        try {
            dispatch(loading());

            const data = await api.sonar.query("AttackPath");

            if (data.error) {
                dispatch(setErrorMessage({ message: data.error.message }));
            } else {
                console.log(data);
                dispatch(
                    set({
                        data: data.data,
                        limit: data.limit,
                        total_items: data.total_items,
                        total_items_per_passfail: data.total_items_per_passfail,
                        status: data.status,
                        loading: false,
                    })
                );
            }
        } catch (e) {
            console.error(e);
        }
    };
