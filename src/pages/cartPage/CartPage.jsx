import React from 'react';
import './cartPage.css';
import { useContext } from 'react';
import { CartDataContext } from '../../contexts/cartDataContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { WishlistDataContext } from '../../contexts/wishlistDataContext';
import StripeCheckout from 'react-stripe-checkout';
import COName from "../../images/android-chrome-512x512.png";
import { toast } from 'react-toastify';

const Cart = () => {

    const { cartData, removeFromCart, increaseCartQty, decreaseCartQty } = useContext(CartDataContext);
    const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistDataContext);

    const itemOnWishlist = (itemId) => wishlistData.find(({ _id }) => _id === itemId);
    const totalPrice = cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

    const onToken = (token) => {
        if(token) {
            toast.success('Thanks payment successful 😄', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
        }else {
            toast.error('Sorry!, something went wrong please try again later ☹', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <>
            {
                cartData.length === 0 ? (<h1>No Items in cart</h1>) : (<> <h2 className='cart-heading'>MY CART ({cartData.length})</h2>
                    <div className='cart-main-div'>
                        <div className='cart-div'>
                            
                            {
                                cartData.map((item) => {
                                    const { _id, name, price, inStock, category, image, qty } = item;
                                    return (
                                        <div style={{ padding: '30px' }} key={_id} >
                                            <div className='cart-card'>
                                                <></>
                                                <img className='cart-img ' src={image} alt="cart" />
                                                <div className='wishlist-btn'>
                                                    {
                                                        itemOnWishlist(_id) ? <FavoriteIcon style={{ color: 'red' }} onClick={() => {
                                                            removeFromWishlist(_id)
                                                        }} /> : <FavoriteIcon style={{ color: 'white' }} onClick={() => {
                                                            addToWishlist(item);
                                                        }} />
                                                    }
                                                </div>
                                                <div className='cart-info-div'>

                                                    <div className='cart-inner-divs'>
                                                        <h3>{name}</h3>
                                                        <p>₹ {price}</p>
                                                    </div>
                                                    <div className='cart-inner-divs'>
                                                        <p>{category}</p>
                                                        <p style={{ color: inStock ? 'green' : 'red' }}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
                                                    </div>

                                                    <div className='cart-qty-div'>
                                                        <button className='qty-btns' disabled={qty > 1 ? false : true} style={{ cursor: qty > 1 ? "pointer" : "no-drop" }} onClick={() => {
                                                            decreaseCartQty(_id);
                                                        }}>-</button>
                                                        <input className='cart-qty' type="text" value={qty} />
                                                        <button className='qty-btns' onClick={() => {
                                                            increaseCartQty(_id);
                                                        }}>+</button>
                                                    </div>

                                                    <div>
                                                        <button className='remove-from-cart' onClick={() => {
                                                            removeFromCart(_id);
                                                        }}>Remove item</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                    <StripeCheckout 
                                        name="Shop More Co."
                                        currency='INR'
                                        amount={totalPrice * 100}
                                        token={onToken}
                                        image={COName}
                                        stripeKey='pk_test_51MXmNSSF7VvGRN5rSjGRMGyWjWIWVK456JY8LBYuw025aPyMeNxyMKEixL6MIwgH5K9VW1zrCV04Nt4ayTFbIgA900uSgJcYyU'
                                    />
                                </div>
                            </div>
                        </div>
                    </div></>)
            }

        </>


    )
}

export default Cart
