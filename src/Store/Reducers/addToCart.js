

const addToCart = (state={inCartIdentifies:[]},action)=>{
    switch (action.type){
        case "ADD_DATA_TO_CART" :
            return {...state,inCartIdentifies:[...state.inCartIdentifies,action.payload]};
        case "REMOVE_DATA_FROM_CART":
            return {...state,inCartIdentifies:[...state.inCartIdentifies.filter(id=>id.id!==action.payload)]}
        default:
            return state
    }
}
        
export default addToCart