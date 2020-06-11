import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../actions/productsActions';

export const INITIAL_STATE = {
  
  name: "VESTIDO FRANZIDO RECORTES",
  style: "20001609",
  code_color: "20001609_029",
  color_slug: "preto",
  color: '',
  on_sale: true,
  regular_price: '',
  actual_price: '',
  discount_percentage: '',
  installments: '',
  iamge: '',
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