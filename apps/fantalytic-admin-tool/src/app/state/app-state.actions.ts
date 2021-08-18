import { createAction, props } from '@ngrx/store';

export const toggleSidenav = createAction(
    '[APP] Toggle Sidenav',
    props<{isOpen: boolean}>()
)