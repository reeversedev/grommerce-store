import * as React from 'react';
import { Provider } from 'react-redux';
import './sass/app.scss';

import Index from './pages/index';
import rootReducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Header } from './components/Header';
import ShoppingCart from './components/ShoppingCart';

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
