export const addToCart = (id) => {
  return {
    type: "ADD_DATA_TO_CART",
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_DATA_FROM_CART",
    payload: id,
  };
};

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
