import { GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED } from "../actions/ingredients";

const initialState = {
  allIngredients: [],
  isLoading: false,
  error: null
};

export const allIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return {
        allIngredients: action.allIngredients,
        isLoading: false,
        error: null
      };
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        isLoading: false,
        error: action.err,
        allIngredients: []
      };
    }
    default: {
      return state;
    }
  }
};
