import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                toast.success('Added to Cart 😃', {
                    position: "top-center",
                    autoClose: 750,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
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
                toast.info('Removed from cart', {
                    position: "top-center",
                    autoClose: 750,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } catch (error) {
            
        }
    }

    const increaseCartQty = async (itemId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`/api/user/cart/${itemId}`, 
            {
                action: {
                    type: "increment"
                  }
            }, 
            {
                headers: {
                    authorization: token
                }
            });
            if(response.status === 200 || response.status ===201) {
                setCartData(response.data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const decreaseCartQty = async (itemId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`/api/user/cart/${itemId}`, 
            {
                action: {
                    type: "decrement"
                  }
            }, 
            {
                headers: {
                    authorization: token
                }
            });
            if(response.status === 200 || response.status ===201) {
                setCartData(response.data.cart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return (
        <CartDataContext.Provider value={{cartData, addToCart, removeFromCart, increaseCartQty, decreaseCartQty}}>{children}</CartDataContext.Provider>
    )
}