import { List } from "../store";
import { ADD_TO_LIST } from "../constants/actions";

export const reducer = (Store: List = {}, action: any) => {
  const prevList = Store.items || [];

  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...Store,
        items: [...prevList, action.payload]
      };
  }
  return { ...Store };
};
