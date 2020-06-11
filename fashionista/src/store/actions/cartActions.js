// TYPES
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const LIST_CART_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// Actions
export const addProductToCart = (product) => ({
    type: ADD_PRODUCT,
    data: product
});
/*
export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: [...data],
});
export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});
*/