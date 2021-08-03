/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Item = (props) => {
  const { item, handleRemoveFromCart } = props;

  return (
    <div className='Checkout-item'>
      <div className='Checkout-element'>
        <h4>{item.title}</h4>
        <span>$ {item.price}</span>
      </div>
      {
        typeof handleRemoveFromCart === 'function' ? (
          <button type='button' onClick={handleRemoveFromCart(item)}>
            <i className='fas fa-trash-alt' title='Eliminar' />
          </button>
        ) : (
          null
        )
      }
    </div>
  );
};

export default Item;

