import { IIngredient } from "../ingredients";
import {
  SET_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR_BUN,
  CLEAR_BURGER_CONSTRUCTOR,
  DELETE_INGREDIENT,
  MOVE_PRODUCT,
} from "../../actions/burger-constructor";
import { SET_CURRENT_ITEM } from "../../actions/current-item";
import { IBurgerConstructorIngredient } from "../../reducers/burger-constructor-reducer";

interface IDeleteIngredient {
  type: typeof DELETE_INGREDIENT;
  payload: string;
}
interface IAddBun {
  type: typeof SET_CONSTRUCTOR_BUN;
  payload: IIngredient;
}
interface IAddIngredients {
  type: typeof SET_CONSTRUCTOR_INGREDIENTS;
  payload: {
    ingredient: IIngredient;
    key: string;
  };
}
interface IMoveProduct {
  type: typeof MOVE_PRODUCT;
  payload: IBurgerConstructorIngredient[];
}
interface IClearProducts {
  type: typeof CLEAR_BURGER_CONSTRUCTOR;
}
export type IBurgerConstructorActions =
  | IClearProducts
  | IAddIngredients
  | IAddBun
  | IDeleteIngredient
  | IMoveProduct;

  export interface ISetCurrentItem{
    type: typeof SET_CURRENT_ITEM
    item: IBurgerConstructorIngredient
  }