/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useRef } from 'react';
// import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Information.css';
import Item from '../components/Item';
import useSumTotal from '../hooks/useSumTotal';

const Information = (props) => {
  const { history } = props;

  const { state: { cart }, addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='text' placeholder='Correo Electronico' name='email' />
            <input type='text' placeholder='Direccion' name='address' />
            <input type='text' placeholder='Apto' name='apto' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='Pais' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Codigo postal' name='cp' />
            <input type='text' placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back' onClick={() => props.history.goBack()}>
            Regresar
          </div>
          <div className='Information-next'>
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedido:</h3>
        {
          cart.map((item) => (
            <Item
              key={item.id}
              item={item}
            />
          ))
        }
        <div className='Information-item'>
          <div className='Information-element'>
            <h4>TOTAL</h4>
            <span>$ {useSumTotal(cart)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
