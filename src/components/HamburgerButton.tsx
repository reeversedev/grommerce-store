import * as React from 'react';

const HamburgerButton = (props: any) => {
  return (
    <div className={`hamburger-menu ${props.className}`}>
      <div className="bar top"></div>
      <div className="bar middle"></div>
      <div className="bar bottom"></div>
    </div>
  );
};

export default HamburgerButton;
