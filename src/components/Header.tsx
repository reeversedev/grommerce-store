import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { openCart, closeCart } from '../redux/actions';

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
          <div
            className="shopping-cart shopping-cart--empty"
            onClick={() => dispatch(openCart())}
          >
            <p className="mb-0">My Cart</p>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
