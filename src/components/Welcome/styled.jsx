import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
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
