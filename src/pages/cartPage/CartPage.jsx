import React, { useEffect } from 'react';
import './cartPage.css';
import axios from 'axios';

const Cart = () => {

    const token = localStorage.getItem('token')
    const fetchCartData = async () => {
        try {
            const response = await axios.get('/api/user/cart',
                {
                    headers: {
                        authorization: token
                    }
                });
            console.log(response);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchCartData()
    }, [])

    return (
        <div>
            <h1>Hello from cart page</h1>
        </div>
    )
}

export default Cart
