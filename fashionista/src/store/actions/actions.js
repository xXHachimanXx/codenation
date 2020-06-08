import {
    fetchProducts
} from "../../services/api";
import {
    createAction
} from 'redux-actions';


// TYPES
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';


export const fetchProductsPending = createAction(FETCH_PRODUCTS_PENDING);
export const fetchProductsSuccess = createAction(FETCH_PRODUCTS_SUCCESS);
export const fetchProductsError = createAction(FETCH_PRODUCTS_ERROR);

export const getProducts = () => {
    return {
        type: [FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_ERROR],
        payload: {
            data: () => fetchProducts(),
        }
    }
}