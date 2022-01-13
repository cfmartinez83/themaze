import styled from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  border-radius: 30px;
  background: #484848;
  color: #fff;
  padding: 10px;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 25px;
    content: ' ';
    height: 33px;
    width: 2px;
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
