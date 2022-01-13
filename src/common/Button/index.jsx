import React from 'react';
import { WrapperButton } from './styled';

const Button = ({ onClick, children, disabled }) => {
  return <WrapperButton onClick={ onClick } disabled={ disabled }>{ children }</WrapperButton>;
};

export default Button;