import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  background: #57585c;
  border-radius: 100%;
  padding: 10px;
  width: 122px;
  height: 122px;
  border: 1px solid;
`;
Wrapper.displayName = 'Wrapper';

export const Middle = styled.div`
  display: flex;
`;

export const Arrow = styled.div`
  padding: 10px;
  background: #1d2328;
  width: 2px;
  height: 10px;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  &:active {
    top: 0.2rem;
    border: 1px solid white;
  }
`;

export const Left = styled(Arrow)`
  margin-right: 58px;
`;
Left.displayName = 'Left';

export const Up = styled(Arrow)`
`;
Up.displayName = 'Up';

export const Down = styled(Arrow)`
`;
Down.displayName = 'Down';

export const Right = styled(Arrow)`
`;
Right.displayName = 'Right';