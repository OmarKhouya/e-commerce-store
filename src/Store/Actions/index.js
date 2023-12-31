export const addToCart = (id)=>{
    return{
        type: "add",
        payload: id,
    }
}

export const removeFromCart = (id)=>{
    return{
        type: "remove",
        payload: id,
    }
}
