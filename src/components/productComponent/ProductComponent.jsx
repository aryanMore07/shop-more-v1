import React from 'react';
import './productComponent.css';

export const ProductComponent = ({ items }) => {
    const { _id, name, price, inStock, category, image } = items;
    return (
        <div key={_id} className='product-card'>
            <img className='product-img ' src={image} alt="product" />
            <div className='inner-divs'>
                <h3>{name}</h3>
                <p>₹ {price}</p>
            </div>
            <div className='inner-divs'>
                <p>{category}</p>
                <p style={{ color: inStock ? 'green' : 'red' }}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <button className='add-to-cart'>Add To Cart</button>
        </div>
    )
}

// export default ProductComponent;
