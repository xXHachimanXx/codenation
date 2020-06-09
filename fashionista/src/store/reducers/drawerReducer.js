import {
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DRAWER_SET_CONTEXT
} from '../actions/drawerActions';

import {
  INITIAL_STATE
} from "../initialState";

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
        drawer_context: 'closed'
      }
    case DRAWER_SET_CONTEXT:
      return {
        ...state,
        drawer_context: action.payload
      }
    default:
      return state;
  }
}