import {
  OPEN_CART,
  CLOSE_CART,
  ActionType,
  UPDATE_CART,
  OPEN_MOBILE_MENU,
  CLOSE_MOBILE_MENU
} from './types';
import { Product } from '../../utils/cart';

export const openCart = (): ActionType => ({
  type: OPEN_CART,
  payload: true
});

export const openMobileMenu = (): ActionType => ({
  type: OPEN_MOBILE_MENU,
  payload: true
});
export const closeMobileMenu = (): ActionType => ({
  type: CLOSE_MOBILE_MENU,
  payload: false
});

export const closeCart = (): ActionType => ({
  type: CLOSE_CART,
  payload: false
});

export const updateCart = (cart: Array<Product>): ActionType => ({
  type: UPDATE_CART,
  payload: cart
});
