import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS, DELETE_INGREDIENT, CLEAR_BURGER_CONSTRUCTOR } from "../actions/actions";

const initialState = {
    bun: null,
    ingredients: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch(action.type){
        case  SET_CONSTRUCTOR_INGREDIENTS:{
            return{
                ...state,
                ingredients: [...state.ingredients,  action.payload]
            }
        }
        case SET_CONSTRUCTOR_BUN:{
            return{
                ...state,
                bun: action.payload
            }
        }
        case  DELETE_INGREDIENT:{
            return{
                ...state,
                ingredients: [...state.ingredients].filter(item => item._id !== action.payload)
            }
        }
        case CLEAR_BURGER_CONSTRUCTOR:{
            return initialState
        }
        default:{
            return {...state}
        }
    }
}