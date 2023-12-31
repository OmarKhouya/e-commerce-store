

const addToCart = (state={inCartIdentifies:[]},action)=>{
    switch (action.type){
        case "add" :
            return {...state,inCartIdentifies:[...state.inCartIdentifies,action.payload]};
        case "remove":
            return {...state,inCartIdentifies:[...state.inCartIdentifies.filter(id=>id.id!==action.payload)]}
        default:
            return state
    }
}

export default addToCart