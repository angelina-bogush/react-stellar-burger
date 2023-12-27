import { IIngredient } from './../ingredients';
import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from '../../actions/ingredients';


interface IGetIngredientsSuccessAction {
    type: typeof GET_INGREDIENTS_SUCCESS;
    allIngredients: IIngredient[];
  }
  
  interface IGetIngredientsRequestAction {
    type: typeof GET_INGREDIENTS_REQUEST;
  }
  
  interface IGetIngredientsFailedAction {
    type: typeof GET_INGREDIENTS_FAILED;
    error: Error;
  }
  
  export type IngredientsActionTypes =
    | IGetIngredientsSuccessAction
    | IGetIngredientsRequestAction
    | IGetIngredientsFailedAction;
  