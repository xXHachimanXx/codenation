import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../actions/productsActions';

export const INITIAL_STATE = {
  pending: false,
  products: [],
  error: null,
};

export default function productsReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      }

    default:
      return state;
  }
}

/**
 export const getProducts = state => state.products;
 export const getProductsPending = state => state.pending;
 export const getProductsError = state => state.error;

 * [].reduce((obj, item) => {
 *
 * }, {});
 */