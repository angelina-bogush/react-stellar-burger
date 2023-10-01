import { combineReducers } from "redux";
import { allIngredientsReducer } from "./reducers";
export const rootReducer = combineReducers({
    allIngredients: allIngredientsReducer
})