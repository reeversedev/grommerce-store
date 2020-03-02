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
      <div className="navbar d-flex flex-column align-items-">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-lg-block d-none" to="/">
            <img
              src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
              alt=""
              height="30"
            />
          </Link>
          <div className="header-item">
            <HamburgerButton className="d-flex d-md-flex d-lg-none" />
          </div>
          <input
            type="text"
            className="col-6 form-control d-lg-block d-none"
            placeholder="Search for Products"
          />
          <div className="header-item">
            <Link className="d-lg-none" to="/">
              <img
                src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
                alt=""
                height="30"
              />
            </Link>
          </div>

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
        </div>
        <div className="d-flex justify-content-between align-items-center-flex-grow-1 d-lg-none">
          <input
            type="text"
            className="col-12 form-control"
            placeholder="Search for Products"
          />
        </div>
      </div>
    </div>
  );
};
