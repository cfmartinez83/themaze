import styled from 'styled-components';
import { FontSmall } from 'styles/font';

export const Label = styled.label`
  display: block;
  ${FontSmall}
  line-height: 28px;
  margin-bottom: 15px;
`;

Label.displayName = 'Label';
