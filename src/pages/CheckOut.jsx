/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Checkout.css';
import { Item } from '../components';
import useSumTotal from '../hooks/useSumTotal';

const Checkout = (props) => {

  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>Lista de Pedidos:</h3>
        {
          cart.length > 0 ? (
            cart.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })
          ) : (
            <p>No tienes productos agregados</p>
          )
        }
      </div>
      <div className='Checkout-sidebar'>
        <h3>Precio Total: $ {useSumTotal(cart)}</h3>
        <Link to='/checkout/information'>
          <button type='button'>Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
