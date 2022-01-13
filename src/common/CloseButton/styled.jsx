import styled from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;
  right: 12px;
  top: 32px;
  width: 3vw;
  height: 3vw;
  opacity: 0.3;
  cursor: pointer;
  border-radius: 30px;
  background: #484848;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    content: ' ';
    height: 4vw;
    width: 0.5vw;
    background-color: #fafafa;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
CloseButton.displayName = 'CloseButton';
