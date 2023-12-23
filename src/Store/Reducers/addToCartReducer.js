
const AddToCartR = (state = {productId:undefined},action) =>{
    switch (action.type) {
        case ("addToCart") :
            return {...state,productId : action.payload}
        default :
            return state
    }
}

export default AddToCartR