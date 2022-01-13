import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 3px solid ${({ top }) => !top ? `#000;` : `transparent`};
  border-left: 3px solid ${({ left }) => !left ? `#000;` : `transparent`};
  border-right: 3px solid ${({ right }) => !right ? `#000;` : `transparent`};
  border-bottom: 3px solid ${({ bottom }) => !bottom ? `#000;` : `transparent`};
  box-sizing: border-box;
  ${({ color }) => color && css`
    background: ${ color };
  `}
  ${({ isStart }) => isStart && css`
    background: green;
  `}
  ${({ isGoal }) => isGoal && css`
    background: red;
  `}
`;

Wrapper.displayName = 'Wrapper';
