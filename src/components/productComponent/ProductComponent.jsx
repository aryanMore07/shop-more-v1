import React, { useContext } from 'react';
import './productComponent.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartDataContext } from '../../contexts/cartDataContext';
import { WishlistDataContext } from '../../contexts/wishlistDataContext';
import { useNavigate } from 'react-router';

export const ProductComponent = ({ items }) => {

    const { cartData, addToCart } = useContext(CartDataContext);
    const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistDataContext);
    const navigate = useNavigate();
    const itemOnCart = (itemId) => cartData.find(({ _id }) => _id === itemId);
    const itemOnWishlist = (itemId) => wishlistData.find(({ _id }) => _id === itemId);
    const { _id, name, price, inStock, category, image } = items;
    return (
        <div key={_id} className='product-card'>
            <div className='wishlist-btn'>

                {
                    itemOnWishlist(_id) ? <FavoriteIcon style={{ color: 'red' }} onClick={() => {
                        removeFromWishlist(_id)
                    }} /> : <FavoriteIcon style={{ color: 'white' }} onClick={() => {
                        addToWishlist(items);
                    }} />
                }

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={() => {
                navigate(`/products/${_id}`)
            }}>
                <img className='product-img ' src={image} alt="product" />

                <div className='inner-divs'>
                    <h3>{name}</h3>
                    <p>₹ {price}</p>
                </div>
                <div className='inner-divs'>
                    <p>{category}</p>
                    <p style={{ color: inStock ? 'green' : 'red' }}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
            </div>
            <button disabled={itemOnCart(_id) ? true : false} style={{ cursor: itemOnCart(_id) ? "no-drop" : "pointer" }} className='add-to-cart' onClick={() => {
                addToCart(items);
            }}>{itemOnCart(_id) ? "Added to Cart" : "Add To Cart"}</button>
        </div>
    )
}

// export default ProductComponent;
