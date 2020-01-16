import React, { Component, useState } from 'react';
import Header from './components/Header';

import './sass/app.scss';

import Index from './pages/index';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [isOpen, setIsOpen] = useState();
  const controlCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Header controlCart={controlCart} />
      <div className="container">
        <Index />
        <ShoppingCart isOpen={isOpen} controlCart={controlCart} />
      </div>
    </div>
  );
};

export default App;
