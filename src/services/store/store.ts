import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import type {} from "redux-thunk/extend-redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import { feedMiddleware } from "../reducers/feed-reducer";
import { profileFeedMiddleware } from "../reducers/profile-feed-reducer";
import thunk from "redux-thunk";
import { AppActions } from "../types/actions/app-actions";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedMiddleware, profileFeedMiddleware);
  },
});
