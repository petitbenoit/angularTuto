import { StoreType } from './../../../types';
import { createSelector } from "@ngrx/store";

// fetch passed store data (selector.ts -> singular , selectors.ts -> multiple)

const storeData = (state: StoreType) => state;

// one selector responsible from fetching data from store // get user data
export const userSelector = createSelector(
    storeData,
    (state) => state.user
);

// check status  if login or not // return value true or false 
export const userStatusSelector = createSelector(
    userSelector,
    (state) => !!state
)