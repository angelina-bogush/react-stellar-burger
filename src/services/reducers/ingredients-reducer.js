import { GET_INGREDIENTS_SUCCESS } from "../actions/ingredients";

const initialState = {
  allIngredients: [],
};

export const allIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return {
        allIngredients: action.allIngredients,
      };
    }
    default: {
      return state;
    }
  }
};
