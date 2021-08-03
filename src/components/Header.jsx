import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Header.css';

const Header = (props) => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className='Header'>
      <Link to='/'>
        <h1 className='Header-title'>PlatziConf Merch</h1>
      </Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket fa-2x' title='Checkout' />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
