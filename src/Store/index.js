import allReducers from "./reducers";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers,composeEnhancers(applyMiddleware(thunk)))

export default store;