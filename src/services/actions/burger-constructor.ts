import { IBurgerConstructorIngredient } from './../reducers/burger-constructor-reducer';
import { IBurgerConstructorActions } from './../types/actions/burger-constructor';
import { IIngredient } from './../types/ingredients';
import { v4 as uuid } from "uuid";

export const SET_CONSTRUCTOR_INGREDIENTS = "SET_CONSTRUCTOR_INGREDIENTS";
export const SET_CONSTRUCTOR_BUN = "SET_CONSTRUCTOR_BUN";
export const CLEAR_BURGER_CONSTRUCTOR = "CLEAR_BURGER_CONSTRUCTOR";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_PRODUCT = "MOVE_PRODUCT";

export function deleteIngredient(itemId: string):IBurgerConstructorActions {
  return {
    type: DELETE_INGREDIENT,
    payload: itemId,
  };
}
export function addBun(item: IIngredient): IBurgerConstructorActions {
  return {
    type: SET_CONSTRUCTOR_BUN,
    payload: item,
  };
}

export function addIngredients(item: IIngredient):IBurgerConstructorActions {
  return {
    type: SET_CONSTRUCTOR_INGREDIENTS,
    payload: {
      ingredient: item,
      key: uuid(),
    },
  };
}

export function moveProduct(item: IBurgerConstructorIngredient):IBurgerConstructorActions {
  return {
    type: MOVE_PRODUCT,
    payload: item.ingredient,
  };
}
export function clearProducts():IBurgerConstructorActions {
  return{
    type: CLEAR_BURGER_CONSTRUCTOR
  }
}