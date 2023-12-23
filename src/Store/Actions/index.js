
export const addToCart = (productId) => {
    return {
        type : "addToCart",
        payload : productId,
    }
}