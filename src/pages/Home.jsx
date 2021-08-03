import React from 'react';
import initialState from '../initialState';
import { Products } from '../components';

const Home = (props) => {
  return (
    <Products products={initialState.products} />
  );
};

export default Home;
