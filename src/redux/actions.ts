import { OPEN_CART, CLOSE_CART, ActionType } from './types';

export const openCart = (): ActionType => ({
  type: OPEN_CART,
  payload: true
});

export const closeCart = (): ActionType => ({
  type: CLOSE_CART,
  payload: false
});
