import { combineReducers } from "redux";
import { allIngredientsReducer, modalReducer, orderReducer} from "./reducers";
export const rootReducer = combineReducers({
 allIngredientsReducer,
 modalReducer,
 orderReducer
})