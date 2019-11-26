import { createSelector } from "reselect";

const getState = (Store: any) => Store;

export const selectorList = createSelector(
  getState,
  (Store): any => Store.items || []
);
