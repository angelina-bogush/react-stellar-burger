import { IIngredient } from "../ingredients";
import {
  SET_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR_BUN,
  CLEAR_BURGER_CONSTRUCTOR,
  DELETE_INGREDIENT,
  MOVE_PRODUCT,
} from "../../actions/burger-constructor";

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
  payload: IIngredient;
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
