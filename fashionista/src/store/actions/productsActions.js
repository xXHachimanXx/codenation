import {
    fetchProducts
} from "../../services/api";


// TYPES
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const GET_PRODUCTS = 'GET_PRODUCTS';

// Actions
export const fetchProductsPending = (pending) => ({
    type: FETCH_PRODUCTS_PENDING,
    payload: pending
});
export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: [...data],
});
export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});

export const getProducts = async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
        const data = await fetchProducts();
        console.log([...data])
        dispatch(fetchProductsSuccess(data));
    } catch (err) {
        dispatch(fetchProductsError(err));
    }
}