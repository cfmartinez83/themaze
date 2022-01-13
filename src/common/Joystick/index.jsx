import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Middle, Left, Up, Down, Right } from './styled';

const Joystick = ({ handleUp, handleDown, handleLeft, handleRight }) => {
  return <Wrapper>
    <Up onClick={ handleUp } />
    <Middle><Left onClick={ handleLeft } /><Right onClick={ handleRight } /></Middle>
    <Down onClick={ handleDown } />
  </Wrapper>;
};

Joystick.propTypes = {
  handleUp: PropTypes.func.isRequired,
  handleDown: PropTypes.func.isRequired,
  handleLeft: PropTypes.func.isRequired,
  handleRight: PropTypes.func.isRequired,
};

export default Joystick;
