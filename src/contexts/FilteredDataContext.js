import { useReducer, useState } from "react";
import { createContext } from "react";
import { getAllProduct } from "../data/data";
import { useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";

export const FilteredDataContext = createContext();

export const FilteredDataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const printData = async () => {
        try {
            setIsLoading(true)
            const dataOne = await getAllProduct();
            dispatch({ type: 'GET_DATA', payload: dataOne.data.products });
            setIsLoading(false);
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
    
    return (
        <FilteredDataContext.Provider value={{ state, dispatch, filterBySort, isLoading }}>{children}</FilteredDataContext.Provider>
    )
}