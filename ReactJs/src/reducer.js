import { REQUEST_PRODUCTS, RESPONSE_PRODUCTS, TOGGLE_LIKE } from "./actions";

const initialState = {
  products: [],
  isLoading: false
};

export default (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return { ...state, isLoading: true };
    case RESPONSE_PRODUCTS:
      return { state, products: action.data, isLoading: false };
    case TOGGLE_LIKE:
      const newProducts = state.products.map(product => {
        if (product.id !== action.data) return product;

        return { ...product, isLike: !product.isLike };
      });
      return { state, products: newProducts };
    default:
      return state;
  }
};
