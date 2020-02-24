import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openCart, closeCart } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../utils/cart';
import { Link } from 'react-router-dom';
import { CartState } from '../redux/types';
import HamburgerButton from './HamburgerButton';

export const Header: React.FC = () => {
  const cart = useSelector((state: CartState) => state.cartQuantity);
  const cartItems = cart.reduce((acc, c) => acc + c.quantity, 0);
  const cartTotal = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <Navbar
        id="navbar"
        color="light"
        light
        expand="md"
        className="navbar d-flex justify-content-around align-items-center flex-row"
      >
        <Link className="navbar-brand d-lg-block d-none" to="/">
          <img
            src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
            alt=""
            height="30"
          />
        </Link>
        <HamburgerButton className="d-flex d-md-flex d-lg-none" />
        <input
          type="text"
          className="col-6 form-control"
          placeholder="Search for Products"
        />
        <div className="header-item">
          <div className="shopping-cart" onClick={() => dispatch(openCart())}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="shopping-cart-icon"
            />
            <span className="cart-quantity">{cartItems}</span>
            {cartItems > 0 ? (
              <p className="mb-0 ml-2 d-none d-md-block d-lg-block d-xl-block">
                ₹ {cartTotal}
              </p>
            ) : (
              <p className="mb-0 ml-2 d-none d-md-block d-lg-block d-xl-block">
                My Cart
              </p>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};
