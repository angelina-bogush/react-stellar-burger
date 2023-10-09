import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS, DELETE_INGREDIENT, CLEAR_BURGER_CONSTRUCTOR, CHANGE_INGREDIENTS_ORDER, MOVE_PRODUCT } from "../actions/burger-constructor";

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
          (item) => item._id === action.payload._id
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

      case CLEAR_BURGER_CONSTRUCTOR:
        return initialState;
        
        case CHANGE_INGREDIENTS_ORDER:
          const { payload } = action;
          const myIndex = state.ingredients.findIndex(item => item.id === payload);
          if (index !== -1) {
            const newIngredients = [...state.ingredients];
            const itemToMove = newIngredients.splice(myIndex, 1)[0];
            newIngredients.push(itemToMove); // перемещение ингредиента в конец списка // перемещение ингредиента в конец списка
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