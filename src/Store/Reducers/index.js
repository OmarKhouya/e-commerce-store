import {combineReducers} from "redux";
import addToCart from "./addToCart";


const allReducers = combineReducers(
    {
        inCartIds : addToCart
    }
)

export default allReducers