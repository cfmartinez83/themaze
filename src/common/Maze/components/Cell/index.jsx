import React from 'react';
import { Wrapper } from './styled';

const Cell = ({ top, left, right, bottom, children, color, isStart, isGoal }) => {
  return <Wrapper top={ top } left={ left } right={ right } bottom={ bottom } color={ color } isStart={ isStart } isGoal={ isGoal }>
    { children }
  </Wrapper>
};

export default Cell;
