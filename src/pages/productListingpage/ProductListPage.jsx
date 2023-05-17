import React from 'react';
import './productListing.css';
import { products } from '../../backend/db/products';
import { useState } from 'react';
import ProductComponent from '../../components/productComponent/ProductComponent';

const ProductListing = () => {

    const [ value, setValue ] = useState(500);

    return (
        <div>
            <div className='product-listing'>
                <aside className='side-bar'>
                    <div className='first-div'>
                        <p>Filter</p>
                        <button className='clear-btn'>Clear</button>
                    </div>
                    <div className='second-div'>
                        <p className='price-filter-tag'> <b>Price</b> <b><p>{value}</p></b></p>
                        <input value={value} min='500' max='50000' type="range" id='price-sort' onChange={(e) => {
                            setValue(e.target.value)
                        }} />
                        
                    </div>
                    <div className='third-div'>
                        <b>Category</b>
                        <div className='filter-div'>
                            <label htmlFor="sort-electronics">
                                <input className='filter-checkbox' type="checkbox" id='sort-electronics' />
                                Electronics
                            </label>
                            <label htmlFor="sort-appliances">
                                <input className='filter-checkbox' type="checkbox" id='sort-appliances' />
                                Appliances
                            </label>
                            <label htmlFor="sort-clothings">
                                <input className='filter-checkbox' type="checkbox" id='sort-clothings' />
                                Clothings
                            </label>
                            <label htmlFor="sort-furniture">
                                <input className='filter-checkbox' type="checkbox" id='sort-furniture' />
                                Furniture
                            </label>
                        </div>
                    </div>
                    <div className='Fourth-div'>
                        <b>Rating</b>
                        <div className='filter-div'>
                            <label htmlFor="four-star">
                                <input className='filter-checkbox' type="checkbox" id='four-star' />
                                4 Stars & above
                            </label>
                            <label htmlFor="three-star">
                                <input className='filter-checkbox' type="checkbox" id='three-star' />
                                3 Stars & above
                            </label>
                            <label htmlFor="two-star">
                                <input className='filter-checkbox' type="checkbox" id='two-star' />
                                2 Stars & above
                            </label>
                            <label htmlFor="one-star">
                                <input className='filter-checkbox' type="checkbox" id='one-star' />
                                1 Stars & above
                            </label>
                        </div>
                        <div className='filter-div'>
                            <b>Sort by</b>
                            <label htmlFor="low-to-high">
                                <input className='filter-checkbox' type="radio" id='low-to-high' name='sortByPrice' />
                                Price - Low to high
                            </label>
                            <label htmlFor="high-to-low">
                                <input className='filter-checkbox' type="radio" id='high-to-low' name='sortByPrice' />
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                </aside>
                <div className='main-bar'>
                    {
                        products.map((item) => (
                            <ProductComponent items={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListing
