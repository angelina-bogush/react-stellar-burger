import { SET_CURRENT_ITEM } from "../actions/current-item";
const initialState = {
  currentIngredient: null,
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ITEM: {
      return {
        currentIngredient: action.item,
      };
    }
    default: {
      return state;
    }
  }
};
