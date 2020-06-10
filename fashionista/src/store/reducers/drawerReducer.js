import {
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DRAWER_OPEN_CART_CONTEXT,
  DRAWER_OPEN_SEARCH_CONTEXT
} from '../actions/drawerActions';

export const INITIAL_STATE = {

  visible: false,
  cartContext: true,
  searchContext: false,
  counter: 0,

};
// falta melhorias
export default function drawerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        ...state,
        visible: action.payload
      }
    case DRAWER_CLOSE:
      return {
        ...state,
        visible: action.payload

      }
    case DRAWER_OPEN_SEARCH_CONTEXT:
      return {
        ...state,
        visible: action.payload,
        searchContext: action.payload,
        cartContext: !action.payload

      }
    case DRAWER_OPEN_CART_CONTEXT:
      return {
        ...state,
        visible: action.payload,
        searchContext: !action.payload,
        cartContext: action.payload

      }
    default:
      return state;
  }
}