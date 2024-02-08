// Reducer for managing the state related to the shopping cart
const addToCart = (state = { inCartIdentifiers: [] }, action) => {
  switch (action.type) {
    // Add a product to the shopping cart
    case "ADD_DATA_TO_CART":
      return {
        ...state,
        inCartIdentifiers: [...state.inCartIdentifiers, action.payload],
      };
    // Remove a product from the shopping cart
    case "REMOVE_DATA_FROM_CART":
      return {
        ...state,
        inCartIdentifiers: [
          ...state.inCartIdentifiers.filter((id) => id !== action.payload),
        ],
      };
    // Default case: return the current state if the action type is not recognized
    default:
      return state;
  }
};

export default addToCart;