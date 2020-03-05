import * as React from 'react';
import { Provider } from 'react-redux';
import './sass/app.scss';

import Index from './pages/index';
import rootReducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ShoppingCart from './components/ShoppingCart';
import MobileMenu from './components/MobileMenu';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Index />
      <ShoppingCart />
      <MobileMenu />
    </Provider>
  );
};

export default App;
