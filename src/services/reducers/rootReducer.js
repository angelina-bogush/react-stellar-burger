import { combineReducers } from "redux";
import { allIngredientsReducer} from "./ingredients-reducer";
import { burgerConstructorReducer } from "./burger-constructor-reducer";
import { orderReducer } from "./order-reducer";
import { modalReducer } from "./current-item-reduser";
export const rootReducer = combineReducers({
 allIngredientsReducer,
 modalReducer,
 orderReducer,
 burgerConstructorReducer
})