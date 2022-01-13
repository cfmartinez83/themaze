import React from 'react';
import { Wrapper, Position, Name, Moves, Time } from './styled';

const User = ({ position, name, moves, time }) => {

  return <Wrapper>
    <Position>{ position }</Position>
    <Name>{ name }</Name>
    <Moves>{ moves }</Moves>
    <Time>{ time }</Time>
  </Wrapper>
};

export default User;
