import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilteredDataContext } from "./FilteredDataContext";
import { useNavigate } from "react-router";

export const CartDataContext = createContext();

export const CartDataProvider = ({children}) => {

    const { state } = useContext(FilteredDataContext);
    const navigate = useNavigate();
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
            
        }
    }

    const addToCart = async (item) => {
        const token = localStorage.getItem("token");
        try {
            if (!state.userDetails) {
                toast.info('Please login first', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate('/login')
            } else {
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

            }
        } catch (error) {
            
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
            
        }
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return (
        <CartDataContext.Provider value={{cartData, addToCart, removeFromCart, increaseCartQty, decreaseCartQty, setCartData}}>{children}</CartDataContext.Provider>
    )
}