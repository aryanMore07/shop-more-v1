/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import './individualProduct.css';
import { useParams } from 'react-router';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { CartDataContext } from '../../contexts/cartDataContext';
import { WishlistDataContext } from '../../contexts/wishlistDataContext';

const IndividualProduct = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartDataContext);
  const fetchProductDetail = async () => {
    try {
      
      const response = axios.get(`/api/products/${productId}`);
      if (response.status === 200) {
        alert('Individual data successful');
      }
      console.log((await response).data.product);
      setProduct((await response).data.product);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])

  const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistDataContext);
  const itemOnWishlist = (itemId) => wishlistData.find(({ _id }) => _id === itemId);
  const { _id, category, image, inStock, name, price } = product;
  console.log(product);
  return (
    <>
      {
        !product ? (<h1>Loading....</h1>) : (
          <div>
            <div className='product-detail-main-div'>
              <div>
                <div className='img-div'>
                  <img src={image} alt="prod  uct" className='individual-product-img' />
                  <div className='wishlist-btn-individual'>

                    {
                      itemOnWishlist(_id) ? <FavoriteIcon style={{ color: 'red' }} onClick={() => {
                        removeFromWishlist(_id)
                      }} /> : <FavoriteIcon style={{ color: 'white' }} onClick={() => {
                        addToWishlist(product);
                      }} />
                    }

                  </div>
                </div>
              </div>
              <div className='product-individual-info'>
                <p className='p_tags'><b>Name: </b>{name}</p>
                <p className='p_tags'><b>Category: </b>{category}</p>
                <p className='p_tags' style={{ color: inStock ? 'green' : 'red' }}><b>{inStock ? 'In Stock' : 'Out of stock'}</b></p>
                <p className='p_tags'><b>Price: </b>{price}</p>
                <button className='add-to-cart ' onClick={() => {
                  addToCart(_id)
                }}>Add to cart</button>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default IndividualProduct
