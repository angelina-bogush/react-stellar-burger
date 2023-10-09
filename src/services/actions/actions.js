import { getData } from "../../utils/api"
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'

export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS'
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN'
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

export const SET_ORDER_NUMBER = 'SET_ORDER_NUMBER'


export function getIngredients(){
    return function(dispatch){
        
        getData().then(data => {
            console.log(data)
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                allIngredients: data
                
            })
        })
        .catch(err => console.log(err))
    }
}

export function setCurrentItem(item) {
    return {
      type: SET_CURRENT_ITEM,
      item: item
    };
  }
export function setOrderNumber(orderNumber){
    return {
        type: SET_ORDER_NUMBER,
        orderNumber: orderNumber
    }
}

export function addIngredients(item){
    return{
        type: SET_CONSTRUCTOR_INGREDIENTS, payload: item
    }
}
  
export function deleteIngredient(item){
    return{
        type: DELETE_INGREDIENT,
        payload: item
    }
}