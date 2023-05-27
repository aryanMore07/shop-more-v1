import React from 'react';
import './cartPage.css';
import { useContext } from 'react';
import { CartDataContext } from '../../contexts/cartDataContext';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const Cart = () => {

    const { cartData, addToCart, removeFromCart } = useContext(CartDataContext);

    const totalPrice = cartData.reduce((acc, curr) => acc + curr.price, 0)

    return (
        <>
            {
                cartData.length === 0 ? (<h1>No Items in cart</h1>) : (<> <h2 className='cart-heading'>MY CART ({cartData.length})</h2>
                    <div className='cart-main-div'>
                        <div className='cart-div'>
                            {
                                cartData.map((item) => {
                                    const { _id, name, price, inStock, category, image, rating } = item;
                                    return (
                                        <>
                                            <div>
                                                <div key={_id} className='cart-card' onClick={() => {
                                                    // navigate(`/products/${_id}`)
                                                }}>
                                                    <img className='cart-img ' src={image} alt="cart" />
                                                    {/* <div className='wishlist-btn'>
                                    <FavoriteIcon style={{ color: 'red' }} />
                                </div> */}
                                                    <div className='cart-inner-divs'>
                                                        <h3>{name}</h3>
                                                        <p>₹ {price}</p>
                                                    </div>
                                                    <div className='cart-inner-divs'>
                                                        <p>{category}</p>
                                                        <p style={{ color: inStock ? 'green' : 'red' }}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
                                                    </div>
                                                    <div>
                                                        <button className='remove-from-cart' onClick={() => {
                                                            removeFromCart(_id);
                                                        }}>Remove item</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='checkout-div'>
                            <div>
                                <h3 className='checkout-header'>PRICE DETAILS</h3>
                                <hr />
                                <div>
                                    <div className='price-info-div'><p><b>PRICE:</b></p> <p>{totalPrice}</p></div>
                                </div>
                            </div>
                            <div>
                                <hr />
                                <div className='price-info-div'>
                                    <h3>Total Price:</h3>
                                    <h4>{totalPrice}</h4>
                                </div>
                                <div className='check-btn-div'>
                                    <button className='checkout-btn'>Check out</button>
                                </div>
                            </div>
                        </div>
                    </div></>)
            }

        </>


    )
}

export default Cart
