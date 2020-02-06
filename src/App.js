import React, { Component, useState } from 'react';
import { Provider } from 'react-redux';
import './sass/app.scss';

import Index from './pages/index';
import ShoppingCart from './components/ShoppingCart';
import rootReducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Header } from './components/Header';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Index />
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
