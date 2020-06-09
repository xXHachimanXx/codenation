import {
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DRAWER_OPEN_CART_CONTEXT,
  DRAWER_OPEN_SEARCH_CONTEXT
} from '../actions/drawerActions';

import {
  INITIAL_STATE
} from "../initialState";

// falta melhorias
export default function drawerReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case DRAWER_OPEN:
      return {
        ...state,
        drawer_context: action.payload
      }
    case DRAWER_CLOSE:
      return {
        ...state,
        drawer: { ...state.drawer, visible: action.payload }
      }
    case DRAWER_OPEN_SEARCH_CONTEXT:
      return {
        ...state,
        drawer: { ...state.drawer, searchContext: action.payload, cartContext: !action.payload }
      }
    case DRAWER_OPEN_CART_CONTEXT:
      return {
        ...state,
        drawer: { ...state.drawer, searchContext: !action.payload, cartContext: action.payload }
      }
    default:
      return state;
  }
}