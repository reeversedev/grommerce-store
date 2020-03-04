import * as React from 'react';

const Button = () => {
  return <a className="btn"></a>;
};

Button.Outline = ({ children }: any) => {
  return <a className="btn--outline">{children}</a>;
};

export default Button;
