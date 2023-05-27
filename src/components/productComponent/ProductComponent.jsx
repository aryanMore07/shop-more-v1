import React, { useContext } from 'react';
import './productComponent.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartDataContext } from '../../contexts/cartDataContext';


export const ProductComponent = ({ items }) => {

    const { cartData, addToCart } = useContext(CartDataContext); 

    const itemOnCart = (itemId) => cartData.find(({_id}) => _id === itemId)
    
    const { _id, name, price, inStock, category, image } = items;
    return (
        <div key={_id} className='product-card' onClick={() => {
            // navigate(`/products/${_id}`)
        }}>
            <img className='product-img ' src={image} alt="product" />
            <div className='wishlist-btn'>
                <FavoriteIcon style={{ color: 'red' }} />
            </div>
            <div className='inner-divs'>
                <h3>{name}</h3>
                <p>₹ {price}</p>
            </div>
            <div className='inner-divs'>
                <p>{category}</p>
                <p style={{ color: inStock ? 'green' : 'red' }}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <button disabled={itemOnCart(_id) ? true : false} className='add-to-cart' onClick={() => {
                addToCart(items);
            }}>{itemOnCart(_id) ? "Added to Cart" : "Add To Cart"}</button>
        </div>
    )
}

// export default ProductComponent;
