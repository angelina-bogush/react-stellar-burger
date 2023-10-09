export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS'
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN'
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const MOVE_PRODUCT = 'MOVE_PRODUCT'

export const CHANGE_INGREDIENTS_ORDER = 'CHANGE_INGREDIENTS_ORDER'

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

export function changeIngredientsOrder(id){
    return{
        type: CHANGE_INGREDIENTS_ORDER,
        payload: id
    }
}
export function moveProduct(item){
    return{
        type: MOVE_PRODUCT,
        payload: item
    }
}