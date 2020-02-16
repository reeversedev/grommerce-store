import { OPEN_CART, CLOSE_CART, ActionType, UPDATE_CART } from './types';
import { Product } from '../../utils/cart';

export const openCart = (): ActionType => ({
  type: OPEN_CART,
  payload: true
});

export const closeCart = (): ActionType => ({
  type: CLOSE_CART,
  payload: false
});

export const updateCart = (cart: Array<Product>): ActionType => ({
  type: UPDATE_CART,
  payload: cart
});
