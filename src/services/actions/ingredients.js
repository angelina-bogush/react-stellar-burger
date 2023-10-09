import { getData } from "../../utils/api"
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'


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


  
