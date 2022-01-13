import styled from 'styled-components';

export const StyledLinkButton = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: 0.5rem 0.5rem #212121;
  width: 20vw;
  text-transform: lowercase;
  cursor: pointer;
  padding: 1rem;
  font-size: 3vw;
  color: #212121;
  background-color: #efefef;
  border-radius: 10rem;
  transform-style: preserve-3d;
  transition: all 0.6s ease;
  border: 0;
  font-weight: bold;
  text-decoration: none;
  &:active {
    top: 0.2rem;
  }
  &:hover {
    transition: all 0.1s ease;
    transform: scale(1.05);
  }
`;
StyledLinkButton.displayName = 'StyledLinkButton';

