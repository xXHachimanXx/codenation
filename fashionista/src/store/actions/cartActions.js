// TYPES
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const LIST_CART_PRODUCTS = 'GET_PRODUCTS';
export const INCREASE_CART_PRODUCT_QUANTITY = 'INCREASE_CART_PRODUCT_QUANTITY';
export const DECREASE_CART_PRODUCT_QUANTITY = 'DECREASE_CART_PRODUCT_QUANTITY';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// Actions
export const addProductToCart = (product) => ({
    type: ADD_PRODUCT,
    data: product
});
export const removeCartProduct = (product_id) => ({
    type: REMOVE_PRODUCT,
    product_id: product_id,
});
/*
export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});
*/