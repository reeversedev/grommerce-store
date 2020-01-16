import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const ShoppingCart = ({ isOpen, controlCart }) => {
  return (
    <Modal isOpen={isOpen} className="modal-right">
      <ModalHeader className="cart-header">Shopping Cart</ModalHeader>
      <ModalBody>Cart Body</ModalBody>
      <ModalFooter>
        <button
          className="btn cart-checkout-button col-12"
          onClick={() => controlCart()}
        >
          Start Shopping
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ShoppingCart;
