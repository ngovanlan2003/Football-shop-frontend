const actionTypes = Object.freeze({
    //admin
    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    //product
    FETCH_ALL_PRODUCT_SUCCESS: 'FETCH_ALL_PRODUCT_SUCCESS',
    FETCH_ALL_PRODUCT_FAILED: 'FETCH_ALL_PRODUCT_FAILED',
    FETCH_ALL_PRODUCT_TYPE_SUCCESS: 'FETCH_ALL_PRODUCT_TYPE_SUCCESS',
    FETCH_ALL_PRODUCT_TYPE_FAILED: 'FETCH_ALL_PRODUCT_TYPE_FAILED',
    //user
    GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
    GET_ALL_USER_ERROR: 'GET_ALL_USER_ERROR',
    RESET_USER: 'RESET_USER',

    //order and cart
    GET_ALL_CART_SUCCESS: 'GET_ALL_CART_SUCCESS',
    GET_ALL_CART_ERROR: 'GET_ALL_CART_ERROR',
})

export default actionTypes;