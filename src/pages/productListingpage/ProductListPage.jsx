import React from 'react';
import './productListing.css';
import { useState } from 'react';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';
import { ProductComponent } from '../../components/productComponent/ProductComponent';

const ProductListing = () => {

    const [value, setValue] = useState(500);
    const { filterBySort, dispatch } = useContext(FilteredDataContext);

    const clearFilterHandler = () => {
        dispatch({type: 'USER_INPUT', payload: ''})
        dispatch({type: 'PRICE_INPUT', payload: ''})
        dispatch({type: 'DROPBOX_INPUT', payload: ''})
        dispatch({type: 'RATING_INPUT', payload: ''})
        dispatch({type: 'SORT_INPUT', payload: ''})
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
                            dispatch({type: 'PRICE_INPUT', payload: event.target.value })
                        }} />

                    </div>
                    <div className='third-div'>
                        <b>Category</b>
                        <div className='filter-div'>
                            <select name="category" id="category" onChange={(event) => {
                                dispatch({type: 'DROPBOX_INPUT', payload: event.target.value})
                            }}>
                                <option value="Electronics">Electronics</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Cloths">Cloths</option>
                            </select>
                        </div>
                    </div>
                    <div className='fourth-div'>
                        <b>Rating</b>
                        <div className='filter-div'>
                            <label htmlFor="four-star">
                                <input className='filter-checkbox' type="radio"  name='filerByRating' id='four-star' value='4' onChange={(event) => {
                                    dispatch({type: 'RATING_INPUT', payload: event.target.value})
                                }} />
                                4 Stars & above
                            </label>
                            <label htmlFor="three-star">
                                <input className='filter-checkbox' type="radio"  name='filerByRating' id='three-star' value='3' onChange={(event) => {
                                    dispatch({type: 'RATING_INPUT', payload: event.target.value})
                                }} />
                                3 Stars & above
                            </label>
                            <label htmlFor="two-star">
                                <input className='filter-checkbox' type="radio"  name='filerByRating' id='two-star' value='2' onChange={(event) => {
                                    dispatch({type: 'RATING_INPUT', payload: event.target.value})
                                }} />
                                2 Stars & above
                            </label>
                            <label htmlFor="one-star">
                                <input className='filter-checkbox' type="radio"  name='filerByRating' id='one-star' value='1' onChange={(event) => {
                                    dispatch({type: 'RATING_INPUT', payload: event.target.value})
                                }} />
                                1 Stars & above
                            </label>
                        </div>
                    </div>
                    <div className='fifth-div'>
                        <div className='filter-div'>
                            <b>Sort by</b>
                            <label htmlFor="low-to-high">
                                <input className='filter-checkbox' type="radio"  id='low-to-high' name='sortByPrice' onChange={(event) => {
                                    dispatch({type: 'SORT_INPUT', payload: 'LOW_TO_HIGH'})
                                }} />
                                Price - Low to high
                            </label>
                            <label htmlFor="high-to-low">
                                <input className='filter-checkbox' type="radio"  id='high-to-low' name='sortByPrice' onChange={(event) => {
                                    dispatch({type: 'SORT_INPUT', payload: 'HIGH_TO_HIGH'})
                                }}/>
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                </aside>
                <div className='main-bar'>
                                
                    {
                        filterBySort.length === 0 ? (<h1>No Data Found {';)'}</h1>) : (filterBySort.map((item, index) => (
                            <ProductComponent key={index} items={item} />
                        ))) 
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListing
