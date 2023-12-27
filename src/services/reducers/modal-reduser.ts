import { SET_CURRENT_ITEM } from "../actions/current-item";
import { ISetCurrentItem } from "../types/actions/burger-constructor";
import { IBurgerConstructorIngredient } from "./burger-constructor-reducer";
type TInitialStore = {
  currentIngredient: null | IBurgerConstructorIngredient
}
const initialState: TInitialStore = {
  currentIngredient: null,
};
export const modalReducer = (state = initialState, action:ISetCurrentItem) => {
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
