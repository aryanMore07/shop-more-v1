import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartDataContext = createContext();

export const CartDataProvider = ({children}) => {

    const [cartData, setCartData] = useState([]);

    const fetchCartData = async () => {

        const token = localStorage.getItem("token");

        try {
            const response = await axios.get("/api/user/cart", {
                headers: {
                    authorization: token
                }
            })

            setCartData(response.data.cart);
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = async (item) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post("/api/user/cart", 
            {
                product:item,
            },
            {
                headers: {
                    authorization: token
                }
            }
            );
            if(response.status === 200 || response.status === 201) {
                setCartData(response.data.cart);
                // Add a toast message here for add to cart 
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeFromCart = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(`/api/user/cart/${id}`, 
                {
                    headers: {
                        authorization: token
                    }
                }
            )
            if(response.status === 200 || response.status === 201) {
                setCartData(response.data.cart);
                // Add a toast message here for remove from cart
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return (
        <CartDataContext.Provider value={{cartData, addToCart, removeFromCart}}>{children}</CartDataContext.Provider>
    )
}