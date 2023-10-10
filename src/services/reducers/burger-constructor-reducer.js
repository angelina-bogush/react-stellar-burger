import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS, DELETE_INGREDIENT, CLEAR_BURGER_CONSTRUCTOR, MOVE_PRODUCT } from "../actions/burger-constructor";

const initialState = {
    bun: null,
    ingredients: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CONSTRUCTOR_INGREDIENTS:
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };

      case SET_CONSTRUCTOR_BUN:
        return {
          ...state,
          bun: action.payload,
        };

      case DELETE_INGREDIENT:
        const index = state.ingredients.findIndex(
          (item) => item.ingredient._id === action.payload
        );
        if (index !== -1) {
          const newIngredients = [...state.ingredients];
          newIngredients.splice(index, 1);
          return {
            ...state,
            ingredients: newIngredients,
          };
        }
        return state;

        case MOVE_PRODUCT:
          return{
            ...state,
            ingredients: action.payload
          }

      default:
        return { ...state };
    }
}