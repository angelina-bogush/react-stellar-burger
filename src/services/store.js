import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { feedMiddleware } from "./reducers/feed-reducer";
import { profileFeedMiddleware } from "./reducers/profile-feed-reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedMiddleware, profileFeedMiddleware);
  },
});
