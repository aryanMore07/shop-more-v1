import { useReducer } from "react";
import { createContext } from "react";
import { getAllProduct } from "../data/data";
import { useEffect } from "react";

export const FilteredDataContext = createContext();

export const FilteredDataProvider = ({ children }) => {

    const filterReducer = (state, action) => {
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
            
            default:
                return state;
        }
    }

    const printData = async () => {
        try {
            const dataOne = await getAllProduct();
            dispatch({ type: 'GET_DATA', payload: dataOne.data.products });
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        printData()
    }, [])

    const [state, dispatch] = useReducer(filterReducer, {
        productsData: [],
        searchInput: '',
        priceInput: '',
        dropboxInput: '',
        sortInput: '',
        userDetails: '',
    })

    const filterBySearch = state.searchInput ? state.productsData.filter(({name}) => name.toLowerCase().includes(state.searchInput)) : state.productsData

    const filterByPrice = state.priceInput ? filterBySearch.filter(({price}) => price >= Number(state.priceInput)) : filterBySearch

    const filterByCategory = state.dropboxInput ? filterByPrice.filter(({category}) => category === state.dropboxInput) : filterByPrice;

    const filterByRatings = state.ratingInput ? filterByCategory.filter(({rating}) => rating > Number(state.ratingInput)) : filterByCategory

    const filterBySort = state.sortInput ? filterByRatings.sort((itemOne, itemTwo) => state.sortInput === 'LOW_TO_HIGH' ? (itemOne.price - itemTwo.price) : itemTwo.price - itemOne.price) : filterByRatings

    return (
        <FilteredDataContext.Provider value={{ state, dispatch, filterBySearch, filterByPrice, filterByCategory, filterByRatings, filterBySort }}>{children}</FilteredDataContext.Provider>
    )
}