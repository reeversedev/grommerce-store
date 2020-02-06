import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openCart, closeCart } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Navbar
        id="navbar"
        color="light"
        light
        expand="md"
        className="navbar d-flex justify-content-between align-items-center flex-row"
      >
        <NavbarBrand href="/">
          <img
            src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
            alt=""
            height="30"
          />
        </NavbarBrand>
        <div className="header-item">
          <div className="shopping-cart" onClick={() => dispatch(openCart())}>
            <FontAwesomeIcon icon={faShoppingCart} />{' '}
            <p className="mb-0 ml-2">My Cart</p>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
