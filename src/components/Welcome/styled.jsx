import styled from 'styled-components';
import { device } from 'styles/size';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  @media ${device.laptop} { 
    flex-direction: column;
  }
  @media ${device.tablet} and (orientation: landscape) {
    flex-direction: row;
  }
`;

Wrapper.displayName = 'Wrapper';

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

WrapperButtons.displayName = 'WrapperButtons';
