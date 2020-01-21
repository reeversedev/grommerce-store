import React, { Component, useState } from 'react';
import Header from './components/Header';

import './sass/app.scss';

import Index from './pages/index';
import ShoppingCart from './components/ShoppingCart';

export const CartContext = React.createContext({ cartStatus: false });

const App = () => {
  return (
    <CartContext.Provider>
      <Header />
      <div className="container">
        <Index />
        <ShoppingCart />
      </div>
    </CartContext.Provider>
  );
};

export default App;
