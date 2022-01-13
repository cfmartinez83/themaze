import styled, { css } from 'styled-components';
import { FontMedium } from 'styles/font';
import { device } from 'styles/size';

export const WrapperButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: 0.5rem 0.5rem grey;
  width: 23vw;
  text-transform: lowercase;
  cursor: pointer;
  padding: 1rem;
  ${ FontMedium }
  color: #484848;
  background-color: #e6e6e6;
  border-radius: 10rem;
  transform-style: preserve-3d;
  transition: all 0.6s ease;
  border: 0;
  font-weight: bold;
  &:active {
    top: 0.2rem;
  }
  ${({ disabled }) => disabled ? css`
    color: #cacaca;
  ` : css`
    &:hover {
      transition: all 0.6s ease;
      transform: scale(1.05);

      &:after {
        transition: opacity 0.6s ease;
      }

      &:before {
        transition: opacity 0.6s linear;
      }
    }
  `}
  @media ${device.tablet} {
    width: 35vw;
  }
`;
WrapperButton.displayName = 'WrapperButton';
