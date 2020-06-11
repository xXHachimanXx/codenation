
// TYPES
export const SET_PRODUCT_TO_BUY = 'SET_PRODUCT_TO_BUY';
export const SET_SIZE_PRODUCT_TO_BUY = 'SET_SIZE_PRODUCT_TO_BUY';

// Actions
export const setProductToBuy = (product) => ({
    type: SET_PRODUCT_TO_BUY,
    payload: product
});

export const setSizeProductToBuy = (product) => ({
    type: SET_SIZE_PRODUCT_TO_BUY,
    payload: product
});