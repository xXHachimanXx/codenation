import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";
import drawerReducer from "./reducers/drawerReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";


const combinedReducers = combineReducers({
    productsReducer, 
    drawerReducer,
    cartReducer,
    productReducer
});

const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));

export default store;