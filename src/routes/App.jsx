/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, CheckOut, Information, Payment, Success, NotFount } from '../pages';
import Layout from '../components/Layout';
import 'bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/checkout/information' component={Information} />
          <Route exact path='/checkout/payment' component={Payment} />
          <Route exact path='/checkout/success' component={Success} />
          <Route component={NotFount} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
