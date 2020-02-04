import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../redux/actions';

const ShoppingCart = () => {
  const cartStatus = useSelector(state => state.cartStatus);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={cartStatus} className="modal-right">
      <ModalHeader className="cart-header" toggle={() => dispatch(closeCart())}>
        Shopping Cart
      </ModalHeader>
      <ModalBody>Cart Body</ModalBody>
      <ModalFooter>
        <button
          className="btn cart-checkout-button col-12"
          onClick={() => dispatch(closeCart())}
        >
          Start Shopping
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ShoppingCart;
