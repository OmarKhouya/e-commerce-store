const getData = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return { ...state, products: action.payload };
    case "GET_DATA_BY_ID":
      return { ...state, product: action.payload };
    case "GET_DATA_BY_CATEGORY":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default getData;
