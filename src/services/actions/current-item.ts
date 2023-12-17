import { IIngredient } from './../types/ingredients';
import { ISetCurrentItem } from '../types/actions/burger-constructor';
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
export function setCurrentItem(item: IIngredient): ISetCurrentItem {
    return {
      type: SET_CURRENT_ITEM,
      item: item
    };
  }