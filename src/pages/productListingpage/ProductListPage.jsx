import React from 'react';
import './productListing.css';
import { useState } from 'react';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';
import { ProductComponent } from '../../components/productComponent/ProductComponent';

const ProductListing = () => {

    const [value, setValue] = useState(500);
    const { state,  isLoading, filterBySort, dispatch } = useContext(FilteredDataContext);

    const clearFilterHandler = () => {
        dispatch({type: 'CLEAR_FILTERS'});
        setValue(500);
    }

    return (
        <div>
            <div className='product-listing'>
                <aside className='side-bar'>
                    <div className='first-div'>
                        <div><p>Filter</p></div>
                        <button className='clear-btn' onClick={clearFilterHandler}>Clear</button>
                    </div>
                    <div className='second-div'>
                        <div><p className='price-filter-tag'> <b>Price</b> <b><p>{value}</p></b></p></div>
                        <input value={value} min='500' max='50000' type="range" id='price-sort' onChange={(event) => {
                            setValue(event.target.value);
                            dispatch({ type: 'PRICE_INPUT', payload: event.target.value })
                        }} />

                    </div>
                    <div className='third-div'>
                        <b>Category</b>
                        <div className='filter-div'>
                            <label htmlFor="sort-electronics">
                                <input checked={state.checkBoxInput.includes("Electronics")} className='filter-checkbox' type="checkbox" value="Electronics" onChange={(event) => {
                                    dispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                                }} id='sort-electronics' />
                                Electronics
                            </label>
                            <label htmlFor="sort-appliances">
                                <input checked={state.checkBoxInput.includes("Appliances")} className='filter-checkbox' type="checkbox" value="Appliances" onChange={(event) => {
                                    dispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                                }} id='sort-appliances' />
                                Appliances
                            </label>
                            <label htmlFor="sort-clothings">
                                <input checked={state.checkBoxInput.includes("Cloths")} className='filter-checkbox' type="checkbox" value="Cloths" onChange={(event) => {
                                    dispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                                }} id='sort-clothings' />
                                Clothings
                            </label>
                            <label htmlFor="sort-furniture">
                                <input checked={state.checkBoxInput.includes("Furniture")} className='filter-checkbox' type="checkbox" value="Furniture" onChange={(event) => {
                                    dispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                                }} id='sort-furniture' />
                                Furniture
                            </label>
                        </div>
                    </div>
                    <div className='fourth-div'>
                        <b>Rating</b>
                        <div className='filter-div'>
                            <label htmlFor="four-star">
                                <input checked={state.ratingInput === '4'} className='filter-checkbox' type="radio" name='filerByRating' id='four-star' value='4' onChange={(event) => {
                                    dispatch({ type: 'RATING_INPUT', payload: event.target.value })
                                }} />
                                4 Stars & below
                            </label>
                            <label htmlFor="three-star">
                                <input checked={state.ratingInput === '3'} className='filter-checkbox' type="radio" name='filerByRating' id='three-star' value='3' onChange={(event) => {
                                    dispatch({ type: 'RATING_INPUT', payload: event.target.value })
                                }} />
                                3 Stars & below
                            </label>
                            <label htmlFor="two-star">
                                <input checked={state.ratingInput === '2'} className='filter-checkbox' type="radio" name='filerByRating' id='two-star' value='2' onChange={(event) => {
                                    dispatch({ type: 'RATING_INPUT', payload: event.target.value })
                                }} />
                                2 Stars & below
                            </label>
                            <label  htmlFor="one-star">
                                <input checked={state.ratingInput === '1'} className='filter-checkbox' type="radio" name='filerByRating' id='one-star' value='1' onChange={(event) => {
                                    dispatch({ type: 'RATING_INPUT', payload: event.target.value })
                                }} />
                                1 Stars & below
                            </label>
                        </div>
                    </div>
                    <div className='fifth-div'>
                        <div className='filter-div'>
                            <b>Sort by</b>
                            <label  htmlFor="low-to-high">
                                <input checked={state.sortInput === 'LOW_TO_HIGH'} className='filter-checkbox' type="radio" id='low-to-high' name='sortByPrice' onChange={(event) => {
                                    dispatch({ type: 'SORT_INPUT', payload: 'LOW_TO_HIGH' })
                                }} />
                                Price - Low to high
                            </label>
                            <label htmlFor="high-to-low">
                                <input checked={state.sortInput === 'HIGH_TO_HIGH'} className='filter-checkbox' type="radio" id='high-to-low' name='sortByPrice' onChange={(event) => {
                                    dispatch({ type: 'SORT_INPUT', payload: 'HIGH_TO_HIGH' })
                                }} />
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                </aside>
                <div className='main-bar'>
                    <h1>Products ({filterBySort.length})</h1>
                    {
                        filterBySort.length > 0 ? (filterBySort.map((item, index) => (
                            <ProductComponent key={index} items={item} />
                        ))) : ( isLoading ? (<h1>Loading...</h1>) : (<h1>No Data Found {":)"}</h1>))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListing
