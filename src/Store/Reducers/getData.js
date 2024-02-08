// Reducer for managing the state related to fetched data
const getData = (state = {}, action) => {
  switch (action.type) {
    // Update state with all products fetched from the API
    case "GET_ALL_DATA":
      return { ...state, products: action.payload };
    
    // Update state with a single product fetched by ID from the API
    case "GET_DATA_BY_ID":
      return { ...state, product: action.payload };
    
    // Update state with products fetched by category from the API
    case "GET_DATA_BY_CATEGORY":
      return { ...state, products: action.payload };
    
    // Update state with products fetched based on a search query from the API
    case "SEARCH_DATA":
      return { ...state, products: action.payload };
    
    // Default case: return the current state if the action type is not recognized
    default:
      return state;
  }
};

export default getData;