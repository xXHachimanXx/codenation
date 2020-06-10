import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import drawerReducer from "./reducers/drawerReducer";

const combinedReducers = combineReducers({
    productsReducer, 
    drawerReducer
});

const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));

export default store;