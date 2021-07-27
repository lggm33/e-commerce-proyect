import React from 'react';
import { Header, Footer } from './index';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
