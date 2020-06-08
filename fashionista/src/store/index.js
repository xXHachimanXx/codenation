import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { INITIAL_STATE } from "./initialState";

import reducer from "./reducers/productReducer";

const middlewares = [thunk];

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(...middlewares));

export default store;