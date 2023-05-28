import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

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