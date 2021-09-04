import { Action, createReducer, on } from "@ngrx/store";
import { displayErrorMessage } from "./app-state.actions";

export interface AppState {
    errorMsg: Map<string, string>;
}

const initialState: AppState = {
    errorMsg: new Map<string,string>()
}

const _appReducer = createReducer(
    initialState,
    on(
        displayErrorMessage,
        (state, { errorMsg }) => {
            const newErrorMsgs = state.errorMsg.set(errorMsg.id, errorMsg.message);
            return {
                ...state,
                errorMsg: newErrorMsgs
            };
        }
    )
);

export function reducer(state: AppState | undefined, action: Action) {
    return _appReducer;
}