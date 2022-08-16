import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { httpReducers } from "../reducers/httpReducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  httpRequestStore: httpReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
