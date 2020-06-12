import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_CART_PRODUCT_QUANTITY,
  DECREASE_CART_PRODUCT_QUANTITY,
  LIST_CART_PRODUCTS,
} from '../actions/cartActions';

export const INITIAL_STATE = {
  cart: [],
  total_value: 0.0,
  
};

// falta melhorias
export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_PRODUCT:      
      return {
        ...state,
        cart: [...state.cart, action.data]
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart
            .filter(product => product.code_color !== action.product_id)
        ]
      }

    case INCREASE_CART_PRODUCT_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart
            .find(product => product.code_color !== action.product_id)
            .quantity++
        ]
      }

    case DECREASE_CART_PRODUCT_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart
            .find(product => product.code_color !== action.product_id)
            .quantity--
        ]
      }

    default:
      return state;
  }
}