export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS'
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN'
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

export function deleteIngredient(item){
    return{
        type: DELETE_INGREDIENT,
        payload: item
    }
}

export function addIngredients(item){
    return{
        type: SET_CONSTRUCTOR_INGREDIENTS, payload: item
    }
}