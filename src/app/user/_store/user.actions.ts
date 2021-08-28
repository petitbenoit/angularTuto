import { createAction, props } from '@ngrx/store';

export const createUserSession = createAction(
    '[User] Create Session', // required
    props<{ user: any }>() // data you want to pass
);

export const clearUserSession = createAction(
    '[User] Clear Session'
);