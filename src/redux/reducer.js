import { createStore, combineReducers } from 'redux';
import { OPEN_CART, CLOSE_CART } from './types';

const initialState = {
  cartStatus: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        cartStatus: action.payload
      };
    case CLOSE_CART:
      return {
        ...state,
        cartStatus: action.payload
      };
    default:
      return state;
  }
};

// const rootReducer = combineReducers({ cartReducer: cartReducer });

export default rootReducer;
