import * as React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { MobileMenuState } from '../redux/types';
import { closeMobileMenu } from '../redux/actions';

const MobileMenu = () => {
  const menuStatus = useSelector((state: MobileMenuState) => state.menuStatus);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={menuStatus} wrapClassName="modal-left">
      <ModalHeader
        className="cart-header"
        toggle={() => dispatch(closeMobileMenu())}
      >
        Welcome!
      </ModalHeader>
      <ModalBody>Hello World</ModalBody>
    </Modal>
  );
};

export default MobileMenu;
