
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
        case 'CHECKBOX_INPUT':
            return {
                ...state, checkBoxInput: state.checkBoxInput.includes(action.payload) ? state.checkBoxInput.filter((category) => category !== action.payload) : [...state.checkBoxInput, action.payload]
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
        case "UPDATE_FILTERED_DATA":
            return {
                ...state, productsData: action.payload
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                searchInput: '',
                priceInput: '',
                ratingInput: '',
                checkBoxInput: [],
                sortInput: '',
            };

        default:
            return state;
    }
}