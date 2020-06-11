// TYPES
export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';
export const DRAWER_OPEN_SEARCH_CONTEXT = 'DRAWER_OPEN_SEARCH_CONTEXT';
export const DRAWER_OPEN_CART_CONTEXT = 'DRAWER_OPEN_CART_CONTEXT';
export const DRAWER_SET_CONTEXT = 'DRAWER_SET_CONTEXT';
export const SET_SEARCHED_PRODUCTS = 'SET_SEARCHED_PRODUCTS';


// Actions
export const openDrawerAction = () => ({
    type: DRAWER_OPEN,
    payload: true
});

export const closeDrawerAction = () => ({
    type: DRAWER_CLOSE,
    payload: false,
});

export const openDrawerOnCartContext = () => ({
    type: DRAWER_OPEN_CART_CONTEXT,
    payload: true,
});

export const openDrawerOnSearchContext = () => ({
    type: DRAWER_OPEN_SEARCH_CONTEXT,
    payload: true,
});

export const setDrawerContext = (context) => ({
    type: DRAWER_SET_CONTEXT,
    payload: context
});

export const setSearchedProducts = (searchedProducts) => ({
    type: SET_SEARCHED_PRODUCTS,
    data: searchedProducts
});