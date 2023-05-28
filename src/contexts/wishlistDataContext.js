import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const WishlistDataContext = createContext();

export const WishlistDataProvider = ({children}) => {

    const [wishlistData, setWishlistData] = useState([]);

    const fetchWishlistData = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get('/api/user/wishlist',
            {
                headers: {
                    authorization: token
                }
            });
            if(response.status === 200) {
                setWishlistData(response.data.wishlist);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addToWishlist = async (item) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post("/api/user/wishlist",
            {
                product: item
            },
            {
                headers: {
                    authorization: token
                }
            }
            )
            if(response.status === 200 || response.status === 201) {
                setWishlistData(response.data.wishlist);
                toast.success('Added to wishlist 😃', {
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
            console.log(error);
        }
    }
    
    const removeFromWishlist = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(`/api/user/wishlist/${id}`,
            {
                headers: {
                    authorization: token
                }
            }
            )
            if(response.status === 200 || response.status === 201) {
                setWishlistData(response.data.wishlist);
                toast.info('Removed from cart!', {
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
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWishlistData()
    }, [])

    return(
        <WishlistDataContext.Provider value={{wishlistData, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistDataContext.Provider>
    )
}