import { combineReducers } from "redux";
import { allIngredientsReducer } from "./ingredients-reducer";
import { burgerConstructorReducer } from "./burger-constructor-reducer";
import { orderReducer } from "./order-reducer";
import { modalReducer } from "./modal-reduser";
import { loginReducer } from "./login-reducer";
import { feedReducer } from "./feed-reducer";
import { profileFeedReducer } from "./profile-feed-reducer";
export const rootReducer = combineReducers({
  allIngredientsReducer,
  modalReducer,
  orderReducer,
  burgerConstructorReducer,
  loginReducer,
  feedReducer,
  profileFeedReducer,
});
