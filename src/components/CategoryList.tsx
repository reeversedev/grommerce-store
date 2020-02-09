import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CategoryList = () => {
  return (
    <div className="bg-white border">
      <p className="px-4 py-4 mb-0">Grocery & Staples</p>
      <Nav vertical>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Pulses
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Atta & Other Flours
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Rice & Other Grains
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Dry Fruits & Nuts
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Edible Oils
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Ghee & Vanaspati
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Spices
          </NavLink>
        </NavItem>
        <NavItem className="border">
          <NavLink href="#" className="py-3">
            <FontAwesomeIcon icon={faPlus} color="orange" /> Salt & Sugar
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default CategoryList;
