import { createStore, combineReducers } from 'redux';
import { OPEN_CART, CLOSE_CART, ActionType } from './types';
import { CartState } from './types';

const initialState: CartState = {
  cartStatus: false
};

const rootReducer = (state = initialState, action: ActionType) => {
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
