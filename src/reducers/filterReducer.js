export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state, productsData: action.payload
            }
        case 'USER_INPUT':
            return {
                ...state, searchInput: action.payload
            }
        case 'PRICE_INPUT':
            return {
                ...state, priceInput: action.payload
            }
        case 'DROPBOX_INPUT':
            return {
                ...state, dropboxInput: action.payload
            }
        case 'RATING_INPUT':
            return {
                ...state, ratingInput: action.payload
            }
        case 'SORT_INPUT':
            return {
                ...state, sortInput: action.payload
            }
        case 'UPDATE_USERS_LOGIN':
            return {
                ...state, userDetails: action.payload
            }
        case 'UPDATE_CART':
            return {
                ...state, cartData: action.payload
            }
        
        default:
            return state;
    }
}