import { getData } from "../../utils/api/order";
import { Dispatch } from "redux";
import { IngredientsActionTypes } from "../types/actions/ingredients.types";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return function (dispatch: Dispatch<IngredientsActionTypes>) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getData()
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          allIngredients: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          error: err,
        });
      });
  };
}
