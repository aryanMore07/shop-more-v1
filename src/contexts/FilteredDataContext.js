import { useReducer } from "react";
import { createContext } from "react";
import { getAllProduct } from "../data/data";
import { useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";

export const FilteredDataContext = createContext();

export const FilteredDataProvider = ({ children }) => {

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
        checkBoxInput: [],
        sortInput: '',
        userDetails: '',
        cartData: [],
    })

    const filterBySearch = state.searchInput ? state.productsData.filter(({name}) => name.toLowerCase().includes(state.searchInput)) : state.productsData

    const filterByPrice = state.priceInput ? filterBySearch.filter(({price}) => price >= Number(state.priceInput)) : filterBySearch

    const filterByCategory = state.checkBoxInput.length > 0 ? filterByPrice.filter((item) => state.checkBoxInput.some((category) => item.category === category)) : filterByPrice

    const filterByRatings = state.ratingInput ? filterByCategory.filter(({rating}) => rating <= Number(state.ratingInput)) : filterByCategory

    const filterBySort = state.sortInput ? filterByRatings.sort((itemOne, itemTwo) => state.sortInput === 'LOW_TO_HIGH' ? (itemOne.price - itemTwo.price) : itemTwo.price - itemOne.price) : filterByRatings
    console.log(state.checkBoxInput);
    return (
        <FilteredDataContext.Provider value={{ state, dispatch, filterBySearch, filterByPrice, filterByCategory, filterByRatings, filterBySort }}>{children}</FilteredDataContext.Provider>
    )
}