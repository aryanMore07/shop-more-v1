import React from 'react';
import './homepage.css';
import headerImage from '../../images/ecommerceHeaderImg.svg';
import cartImage from '../../images/addtocartImg.svg';
import { categories } from '../../backend/db/categories';
// import { useNavigate } from 'react-router';

const Home = () => {

  return (
    <div className='home-div'>
      <div className='header-div'>
        <img src={headerImage} alt="header-img" className='header-image' />
        <h1 className='header-tag-line'>Shop with <span className='pointed-text'> ease,</span><br /> from <span className='pointed-text'>anywhere,</span><br /> at any <span className='pointed-text'>time!</span></h1>
      </div>
      <div className='middle-div'>
        <h1 className='middle-tag-line'>Add your favorite items to the <span className='middle-pointed-text'>cart</span> and <span className='middle-pointed-text'>wishlist</span></h1>
        <img src={cartImage} alt="cart-pic" className='cart-img' />
      </div>
      <div className='last-div'>
        <div className='categories-div'>
          {
            categories.map((category) => {
              const { _id, categoryName, description, img } = category;
              return (
                <div className='category' key={_id}>
                  <img className='product-img' src={img} alt="product" />
                  <h3>{categoryName}</h3>
                  <p>{description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
