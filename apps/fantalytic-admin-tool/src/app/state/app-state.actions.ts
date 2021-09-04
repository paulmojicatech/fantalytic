import { createAction, props } from '@ngrx/store';

export const APP_DISPLAY_ERROR_MESSAGE = '[APP] Display Error Message';

export const displayErrorMessage = createAction(
    APP_DISPLAY_ERROR_MESSAGE,
    props<{errorMsg: {id: string, message: string}}>()
);