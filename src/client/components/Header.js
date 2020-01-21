import React, { Component, useState, useContext } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { CartContext } from '../App';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = React.useContext(CartContext);
  console.log('open', openCart);
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
            // onClick={() => this.props.controlCart()}
          >
            <p className="mb-0">My Cart</p>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
