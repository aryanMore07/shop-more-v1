import React, { useEffect } from 'react';
import './individualProduct.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const IndividualProduct = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState({});
  console.log(productId);
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
  const { category, image, inStock, name, price } = product;
  return (
    <div>
      <div className='product-detail-main-div'>
        <div>
          <img src={image} alt="product" className='individual-product-img' />
        </div>
        <div>
          <p className='p_tags'><b>Name: </b>{name}</p>
          <p className='p_tags'><b>Category: </b>{category}</p>
          <p className='p_tags' style={{ color: inStock ? 'green' : 'red' }}><b>{inStock ? 'In Stock' : 'Out of stock'}</b></p>
        <p className='p_tags'><b>Price: </b>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default IndividualProduct
