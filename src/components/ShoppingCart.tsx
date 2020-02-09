import * as React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../redux/actions';
import { CartState } from '../redux/types';

const EmptyCart: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img
        src="https://www.scholarswing.in/resources/images/empty-cart.png"
        className="img-fluid"
      />
      <p>No Items in your cart</p>
      <p className="text-muted">Your favourite items are just a click away</p>
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = React.useState([]);
  console.log(cart);
  const cartStatus = useSelector((state: CartState) => state.cartStatus);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={cartStatus} wrapClassName="modal-right">
      <ModalHeader className="cart-header" toggle={() => dispatch(closeCart())}>
        My Cart
      </ModalHeader>
      <ModalBody className="d-flex flex-column justify-content-center align-self-center">
        <EmptyCart />
      </ModalBody>
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
