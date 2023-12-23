import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients";
import { IngredientsActionTypes } from "../types/actions/ingredients.types";
import { Dispatch } from "redux";
import { IIngredient } from "../types/ingredients";

interface IIngredientsState{
  allIngredients: IIngredient[],
  isLoading: boolean,
  error: null | Error,
}

const initialState: IIngredientsState = {
  allIngredients: [],
  isLoading: false,
  error: null,
};

export const allIngredientsReducer = (state = initialState, action: IngredientsActionTypes) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return {
        allIngredients: action.allIngredients,
        isLoading: false,
        error: null,
      };
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        isLoading: false,
        error: action.error,
        allIngredients: [],
      };
    }
    default: {
      return state;
    }
  }
};
