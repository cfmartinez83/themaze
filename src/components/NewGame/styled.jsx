import styled from 'styled-components';
import { FontLarge } from 'styles/font';

export const Wrapper = styled.div`
`;

Wrapper.displayName = 'Wrapper';

export const Title = styled.div`
  font-size: ${FontLarge};
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: #212121;
`;

Title.displayName = 'Title';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

Form.displayName = 'Form';
