/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import './individualProduct.css';
import { useParams } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartDataContext } from '../../contexts/cartDataContext';
import { WishlistDataContext } from '../../contexts/wishlistDataContext';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';
const IndividualProduct = () => {

  const { productId } = useParams();
  const { state } = useContext(FilteredDataContext);
  const { addToCart } = useContext(CartDataContext);

  const product = state.productsData.find((item) => item._id === productId)
  const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistDataContext);
  const itemOnWishlist = (itemId) => wishlistData.find(({ _id }) => _id === itemId);
  const { _id, category, image, inStock, name, price, discription } = product;
  console.log(discription)
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
                <p className='p_tags'><b>Features: </b>
                <ul>
                  {
                    discription.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  }
                </ul></p>
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
