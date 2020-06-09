import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { INITIAL_STATE } from "./initialState";

import reducer from "./reducers/productReducer";

//const combinedReducers = combineReducers({reducer});
//const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(thunk));

export default store;