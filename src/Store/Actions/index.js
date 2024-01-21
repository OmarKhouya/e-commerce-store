export const addToCart = (id)=>{
    return{
        type: "ADD_DATA_TO_CART",
        payload: id,
    }
}

export const removeFromCart = (id)=>{
    return{
        type: "REMOVE_DATA_FROM_CART",
        payload: id,
    }
}

export const getAllData = () =>{
    return async(dispatch,getState) =>{
        const response = await fetch('https://dummyjson.com/products')
        const products = await response.json()
        console.log(getState)
        dispatch({
            type: "GET_ALL_DATA",
            payload: products
        })
    }
}
export const getDataById = (id) =>{
    return async(dispatch,getState) =>{
        const response = await fetch('https://dummyjson.com/products/'+id)
        const product = await response.json()
        dispatch({
            type: "GET_DATA_BY_ID",
            payload: product
        })
    }
}