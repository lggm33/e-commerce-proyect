import React, { useContext } from 'react';
import { Product } from './index';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Products.css';

const Products = (props) => {
  const { state, addToCart } = useContext(AppContext);
  const { products, cart } = state;

  const handleAddToCart = (product) => () => {
    const productAllRearyAdd = cart.find((item) => item.id === product.id);
    productAllRearyAdd === undefined && addToCart(product);
  };

  return (
    <div className='Products'>
      <div className='Products-items'>
        {
          products.map((product) => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
