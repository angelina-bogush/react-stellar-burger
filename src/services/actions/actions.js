import { getData } from "../../utils/api"
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
export const SET_CONSTRUCTOR_INGREDIENTS = 'SET_CONSTRUCTOR_INGREDIENTS'
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN'

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