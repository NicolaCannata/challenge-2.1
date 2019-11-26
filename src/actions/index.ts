import { ADD_TO_LIST } from "../constants/actions";

export const actionAddToList = (myItem: any) => ({
  type: ADD_TO_LIST,
  payload: myItem
});
