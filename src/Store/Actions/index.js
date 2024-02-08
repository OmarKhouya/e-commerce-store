// Action creator to add a product to the shopping cart
export const addToCart = (id) => {
  return {
    type: "ADD_DATA_TO_CART",
    payload: id,
  };
};

// Action creator to remove a product from the shopping cart
export const removeFromCart = (id) => {
  return {
    type: "REMOVE_DATA_FROM_CART",
    payload: id,
  };
};

// Action creator to fetch all products from the API
export const getAllData = (display) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=" + display.limit
    );
    const products = await response.json();
    dispatch({
      type: "GET_ALL_DATA",
      payload: products,
    });
  };
};

// Action creator to fetch a single product by ID from the API
export const getDataById = (id) => {
  return async (dispatch, getState) => {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const product = await response.json();
    dispatch({
      type: "GET_DATA_BY_ID",
      payload: product,
    });
  };
};

// Action creator to fetch products by category from the API
export const getDataByCategory = (category, display) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://dummyjson.com/products/category/" +
        category +
        "?limit=" +
        display.limit
    );
    const product = await response.json();
    dispatch({
      type: "GET_DATA_BY_CATEGORY",
      payload: product,
    });
  };
};

// Action creator to fetch products based on a search query from the API
export const getSearchData = (searchData) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + searchData
    );
    const products = await response.json();
    dispatch({
      type: "SEARCH_DATA",
      payload: products,
    });
  };
};