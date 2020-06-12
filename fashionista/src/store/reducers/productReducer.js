import {
  SET_PRODUCT_TO_BUY,
  SET_SIZE_PRODUCT_TO_BUY
} from '../actions/productActions';

export const INITIAL_STATE = {
  product_info: {
    name: '',
    style: '',
    code_color: '',
    color_slug: '',
    color: '',
    on_sale: true,
    regular_price: '',
    actual_price: '',
    discount_percentage: '',
    installments: '',
    image: '',
    sizes: [],
    size: ''
  },
  quantity: 0,

};

export default function productsReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case SET_PRODUCT_TO_BUY:
      return {
        ...state,
        product_info: action.payload,
        quantity: 1
      }
    case SET_SIZE_PRODUCT_TO_BUY:
      return {
        ...state,
        product_info: {...state.product_info, size: action.payload}
      }

    default:
      return state;
  }
}