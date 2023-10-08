import { GET_INGREDIENTS_SUCCESS, SET_CURRENT_ITEM, SET_ORDER_NUMBER } from "../actions/actions"
const initialState = {
    allIngredients: [],
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
        // case SET_CONSTRUCTOR_INGREDIENTS:{
        //     return{
        //         ...state,
        //         constructorIngredients: {...state.constructorIngredients, ingredients: [...state.constructorIngredients.ingredients, action.payload]}
        //     }
        // }
        // case SET_CONSTRUCTOR_BUN:{
        //     return{
        //         ...state,
        //         constructorIngredients: {...state.constructorIngredients, bun: [action.payload]}
        //     }
        // }
        default:{
            return {...state}
        }
    }
}
export const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ORDER_NUMBER:{
            return {
                ...state,
                order: action.orderNumber
            }
        }
        default:{
            return {...state}
        }
    }
}