import { combineReducers } from "redux";
import addToCart from "./addToCart";
import getData from "./getData";

// Combine multiple reducers into a single root reducer
const allReducers = combineReducers({
  // Reducer to manage the state related to the shopping cart
  inCartIds: addToCart,

  // Reducer to manage the state related to fetched data
  prods: getData,
});

export default allReducers;