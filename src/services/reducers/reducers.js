import { GET_INGREDIENTS_SUCCESS } from "../actions/allIngredients"

const initialState = {
    allIngredients: [],
    constructorIngredients: [],
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