import { GET_INGREDIENTS_SUCCESS, SET_CURRENT_ITEM, SET_CONSTRUCTOR_INGREDIENTS, SET_CONSTRUCTOR_BUN } from "../actions/actions"
import { ingredient } from "../../utils/data"
const initialState = {
    allIngredients: [],
    constructorIngredients: {bun: null, ingredients: []},
    currentIngredient: null,
    order: null
}

export const allIngredientsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INGREDIENTS_SUCCESS:{
            return {
                ...state,
                allIngredients:  action.allIngredients
            }
        }
        default:{
            return {...state}
        }
    }
}
export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_ITEM:{
            return{
                ...state,
                currentIngredient: action.item
            }
        }
        case SET_CONSTRUCTOR_INGREDIENTS:{
            return{
                ...state,
                constructorIngredients: {...state.constructorIngredients, ingredients: [...state.constructorIngredients.ingredients, action.payload]}
            }
        }
        case SET_CONSTRUCTOR_BUN:{
            return{
                ...state,
                constructorIngredients: {...state.constructorIngredients, bun: action.payload}
            }
        }
        default:{
            return {...state}
        }
    }
}