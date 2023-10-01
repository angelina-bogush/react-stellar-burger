import { combineReducers } from "redux";
import { allIngredientsReducer, modalReducer } from "./reducers";
export const rootReducer = combineReducers({
 allIngredientsReducer,
 modalReducer
})