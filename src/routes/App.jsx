/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, CheckOut, Information, Payment, Success, NotFount } from '../pages';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/components/App.css';
// import 'bootstrap';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
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
    </AppContext.Provider>
  );
};

export default App;
