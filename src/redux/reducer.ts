import {
  OPEN_CART,
  CLOSE_CART,
  ActionType,
  UPDATE_CART,
  OPEN_MOBILE_MENU,
  CLOSE_MOBILE_MENU
} from './types';
import { CartState } from './types';
import { cart } from '../../utils/cart';

const initialState: CartState = {
  cartStatus: false,
  cartQuantity: cart
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
    case OPEN_MOBILE_MENU:
      return {
        ...state,
        menuStatus: action.payload
      };
    case CLOSE_MOBILE_MENU:
      return {
        ...state,
        menuStatus: action.payload
      };
    case UPDATE_CART:
      return {
        ...state,
        cartQuantity: action.payload
      };
    default:
      return state;
  }
};

// const rootReducer = combineReducers({ cartReducer: cartReducer });

export default rootReducer;
