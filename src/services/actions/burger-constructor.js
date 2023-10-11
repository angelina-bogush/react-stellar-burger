import { v4 as uuid } from "uuid";
export const SET_CONSTRUCTOR_INGREDIENTS = "SET_CONSTRUCTOR_INGREDIENTS";
export const SET_CONSTRUCTOR_BUN = "SET_CONSTRUCTOR_BUN";
export const CLEAR_BURGER_CONSTRUCTOR = "CLEAR_BURGER_CONSTRUCTOR";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_PRODUCT = "MOVE_PRODUCT";

export function deleteIngredient(itemId) {
  return {
    type: DELETE_INGREDIENT,
    payload: itemId,
  };
}
export function addBun(item) {
  return {
    type: SET_CONSTRUCTOR_BUN,
    payload: item,
  };
}

export function addIngredients(item) {
  return {
    type: SET_CONSTRUCTOR_INGREDIENTS,
    payload: {
      ingredient: item,
      key: uuid(),
    },
  };
}

export function moveProduct(item) {
  return {
    type: MOVE_PRODUCT,
    payload: item,
  };
}
