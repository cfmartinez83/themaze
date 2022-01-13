import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45vw;
  width: 45vw;
  margin: 0 auto;
  outline:none;
`;

Wrapper.displayName = 'Wrapper';

export const Text = styled.div`
  font-size: 2vw;
`;

Text.displayName = 'Text';
