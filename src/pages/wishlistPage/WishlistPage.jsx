import React from 'react';
import './wishlistPage.css';
import { useContext } from 'react';
import { WishlistDataContext } from '../../contexts/wishlistDataContext';
import { ProductComponent } from '../../components/productComponent/ProductComponent';

const Wishlist = () => {
  const { wishlistData } = useContext(WishlistDataContext);
  return (
    <div className='wishlist-div'>
      {
        wishlistData.length === 0 ? (<h1>No items in Wishlist</h1>) :
          (wishlistData.map((item) => <ProductComponent items={item} />))
      }
    </div>
  )
}

export default Wishlist;
