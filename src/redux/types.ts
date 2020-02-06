export const OPEN_CART: string = 'OPEN_CART';
export const CLOSE_CART: string = 'CLOSE_CART';

export interface CartState {
  cartStatus: boolean;
}

export interface ActionType {
  type: string;
  payload: any;
}

