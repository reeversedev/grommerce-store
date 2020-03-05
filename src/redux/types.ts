import { Product } from '../../utils/cart';

export const OPEN_CART: string = 'OPEN_CART';
export const CLOSE_CART: string = 'CLOSE_CART';
export const UPDATE_CART: string = 'UPDATE_CART';
export const OPEN_MOBILE_MENU: string = 'OPEN_MOBILE_MENU';
export const CLOSE_MOBILE_MENU: string = 'CLOSE_MOBILE_MENU';

export interface MobileMenuState {
  menuStatus: boolean;
}

export interface CartState {
  cartStatus: boolean;
  cartQuantity: Array<Product>;
}

export interface ActionType {
  type: string;
  payload: any;
}
