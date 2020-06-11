import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  LIST_CART_PRODUCTS,
} from '../actions/cartActions';

export const INITIAL_STATE = {
  cart: []
};

// falta melhorias
export default function drawerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}