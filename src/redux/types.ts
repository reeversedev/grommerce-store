import { Product } from '../../utils/cart';

export const OPEN_CART: string = 'OPEN_CART';
export const CLOSE_CART: string = 'CLOSE_CART';
export const UPDATE_CART: string = 'UPDATE_CART';

export interface CartState {
  cartStatus: boolean;
  cartQuantity: Array<Product>;
}

export interface ActionType {
  type: string;
  payload: any;
}
