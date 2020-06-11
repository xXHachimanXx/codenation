import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import drawerReducer from "./reducers/drawerReducer";
import cartReducer from "./reducers/cartReducer";

const combinedReducers = combineReducers({
    productsReducer, 
    drawerReducer,
    cartReducer
});

const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));

export default store;