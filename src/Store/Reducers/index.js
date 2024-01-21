import {combineReducers} from "redux";
import addToCart from "./addToCart";
import getData from "./getData";


const allReducers = combineReducers(
    {
        inCartIds : addToCart,
        prods : getData
    }
)

export default allReducers