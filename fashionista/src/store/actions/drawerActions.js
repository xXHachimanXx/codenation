// TYPES
export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';
export const DRAWER_SET_CONTEXT = 'DRAWER_SET_CONTEXT';

// Actions
export const openDrawer = (context) => ({
    type: DRAWER_OPEN,
    payload: context
});

export const closeDrawer = () => ({
    type: DRAWER_CLOSE,
    payload: 'closed',
});

export const setDrawerContext = (context) => ({
    type: DRAWER_SET_CONTEXT,
    payload: context
});
