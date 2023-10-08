import { combineReducers } from "redux";
import { allIngredientsReducer, modalReducer, orderReducer} from "./reducers";
import { burgerConstructorReducer } from "./burger-constructor-reducer";
export const rootReducer = combineReducers({
 allIngredientsReducer,
 modalReducer,
 orderReducer,
 burgerConstructorReducer
})