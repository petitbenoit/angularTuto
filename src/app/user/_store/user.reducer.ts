import { createUserSession, clearUserSession } from './user.actions';
import { createReducer, on } from "@ngrx/store";

// reducer : store data should be initialized (1st rule) - perform data updates based on the action that we have
// store data should be kept in immutable (you have to ensure data should remain immutable)
// state : is the data held inside the store currently
const initialState = null;
export const userReducer = createReducer(
    initialState,
    on(createUserSession, (state, { user }) => ({...user})),
    on(clearUserSession, (state) => null)
);