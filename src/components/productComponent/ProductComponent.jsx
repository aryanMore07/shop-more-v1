import React from 'react';
import './productComponent.css';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router';

export const ProductComponent = ({ items }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const addToCartHandler = async (item) => {
        console.log(item);
        try {
            const response = await axios.post('/api/user/cart', {
                product: item,
                headers: {
                    authorization: token,
                },
            })
            if (response.status === 200) {
                alert('Added to cart succesfully')
            } else {
                alert('Failed to add')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { _id, name, price, inStock, category, image } = items;
    return (
        <div key={_id} className='product-card' onClick={() => {
            navigate(`/products/${_id}`)
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
            <button className='add-to-cart' onClick={() => {
                addToCartHandler(items);
            }}>Add To Cart</button>
        </div>
    )
}

// export default ProductComponent;
