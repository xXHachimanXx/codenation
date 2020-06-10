import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { INITIAL_STATE } from "./initialState";

import productsReducer from "./reducers/productsReducer";
import drawerReducer from "./reducers/drawerReducer";

const combinedReducers = combineReducers({
    productsReducer, 
    drawerReducer
});

const store = createStore(combinedReducers, INITIAL_STATE, applyMiddleware(thunk));

export default store;