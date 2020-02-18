import * as React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../redux/actions';
import { CartState } from '../redux/types';
import { Product, cart, removeFromCart, addToCart } from '../../utils/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faPlusCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

type NonEmptyCartProps = {
  cart: Array<Product>;
  changeState: CallableFunction;
};

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

const NonEmptyCart: React.FC<NonEmptyCartProps> = ({ cart, changeState }) => {
  const grommercePrice = cart.reduce((acc, c) => acc + c.price * c.quantity, 0);
  const marketPrice = cart.reduce((acc, c) => acc + c.mrp * c.quantity, 0);
  const profit = marketPrice - grommercePrice;
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column justify-content-between bg-white">
        <div className="d-flex justify-content-between px-3 py-2">
          <p className="mb-0">Sub Total</p>
          <p className="mb-0">₹ {grommercePrice}</p>
        </div>
        <div className="d-flex justify-content-between px-3 py-2">
          <p className="mb-0">Delivery Charges</p>
          <p className="mb-0 text-success">Free</p>
        </div>
        <div className="border-top my-3"></div>
        <div className="d-flex justify-content-between px-3 py-2">
          <p>Your total savings</p>
          <p className="text-danger">
            ₹ {profit} ({((profit * 100) / marketPrice).toPrecision(2)}%)
          </p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-between bg-white">
        {cart.map(c => {
          return (
            <div className="d-flex align-items-center p-2" key={c.id}>
              <div className="w-20">
                <img src={c.img} alt={c.name} height="100" />
              </div>
              <div className="w-80">
                <p className="mb-0 mt-2">{c.name}</p>
                <p>{c.volume}</p>
                <div className="d-flex">
                  <div
                    className="btn-group d-flex align-items-center"
                    role="group"
                    aria-label="Basic example"
                  >
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className="btn--link action-icon"
                      onClick={() => {
                        changeState();
                        removeFromCart(c);
                      }}
                    />
                    <p className="mx-3 mb-0">{c.quantity}</p>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="btn--link action-icon"
                      onClick={() => {
                        changeState();
                        addToCart(c);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-around ml-2">
                    <p className="text-muted mb-0 mx-2">X</p>
                    <p className="mb-0 mx-2">₹{c.price}</p>
                    <p className="mb-0 mx-2">
                      <del>₹{c.mrp}</del>
                    </p>
                    <p className="float-right mb-0">₹{c.price * c.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const cartStatus = useSelector((state: CartState) => state.cartStatus);
  const [dummyState, setDummyState] = React.useState(false);
  const dispatch = useDispatch();
  const [cartQuantity, setCartQuantity] = React.useState<Array<
    Product
  > | null>();

  React.useEffect(() => {
    setCartQuantity(cart);
    window.addEventListener('storage', () => {
      setCartQuantity(cart);
    });
  });

  React.useEffect(() => {
    return () => {
      window.removeEventListener('storage', () => {
        setCartQuantity(cart);
      });
    };
  }, []);

  return (
    <Modal isOpen={cartStatus} wrapClassName="modal-right">
      <ModalHeader className="cart-header" toggle={() => dispatch(closeCart())}>
        My Cart ({cart.reduce((acc, c) => acc + c.quantity, 0)} items)
      </ModalHeader>
      <ModalBody>
        {cartQuantity && cartQuantity.length > 0 ? (
          <NonEmptyCart
            cart={cart}
            changeState={() => setDummyState(!dummyState)}
          />
        ) : (
          <div className="d-flex flex-column justify-content-center align-self-center">
            <EmptyCart />
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <button
          className="btn cart-checkout-button col-12"
          onClick={() => dispatch(closeCart())}
        >
          {cartQuantity && cartQuantity.length > 0 ? (
            <span>
              Proceed to Checkout{' '}
              <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
            </span>
          ) : (
            <span>Start Shopping</span>
          )}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ShoppingCart;
