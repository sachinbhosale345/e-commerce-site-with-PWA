export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RESPONSE_PRODUCTS = "RESPONSE_PRODUCTS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const responseProducts = data => ({
  type: RESPONSE_PRODUCTS,
  data
});

export const toggleLike = productId => ({
  type: TOGGLE_LIKE,
  data: productId
});
