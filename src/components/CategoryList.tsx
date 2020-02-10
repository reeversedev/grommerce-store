import * as React from 'react';
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CategoryList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white border">
      <p className="px-4 py-4 mb-0">Grocery & Staples</p>
      <Nav vertical className="category-list">
        <NavItem className="border category-list-item">
          <NavLink onClick={() => setIsOpen(!isOpen)} className="py-3">
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} color="orange" />{' '}
            Pulses
          </NavLink>
          <Collapse isOpen={isOpen}>
            <div className="border py-3">
              <span className="ml-5">Masoor</span>
            </div>
            <div className="border py-3">
              <span className="ml-5">Soya</span>
            </div>
            <div className="border py-3">
              <span className="ml-5">Dried Peas & Others</span>
            </div>
          </Collapse>
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
