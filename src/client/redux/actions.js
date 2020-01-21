import { OPEN_CART } from './types';

export const openCart = () => ({
  type: OPEN_CART,
  payload: true
});

export const closeCart = () => ({
  type: CLOSE_CART,
  payload: false
});
