import React from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import dogReducer from "./reducers/dogReducer";
/// 1 ofject gồm nhiều reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  dog: dogReducer,
});

/////dispatch
const middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("store",store);
    action(store.dispatch);
    return;
  }
  next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleware)),
);
export default store;
