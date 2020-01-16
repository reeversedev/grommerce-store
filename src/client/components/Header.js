import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
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
              onClick={() => this.props.controlCart()}
            >
              <p className="mb-0">My Cart</p>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
