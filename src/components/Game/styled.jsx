import styled from 'styled-components';
import { FontLarge, FontMedium, FontSmall } from 'styles/font';
import { device } from 'styles/size';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${device.laptop} { 
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.tablet} and (orientation: landscape) {
    flex-direction: row;
  }
`;

Wrapper.displayName = 'Wrapper';

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

WrapperTitle.displayName = 'WrapperTitle';

export const Title = styled.div`
  ${ FontLarge }
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: #212121;
  @media ${device.tablet} and (orientation: landscape) {
    ${ FontMedium }
  }
`;

Title.displayName = 'Title';

export const WrapperField = styled.div`
  display: flex;
`;

WrapperField.displayName = 'WrapperField';

export const Summary = styled.div`
  display: flex;
`;

Summary.displayName = 'Summary';

export const Label = styled.div`
  ${ FontSmall }
  font-weight: bold;
  text-align: center;
  color: #212121;
  margin-right: 5px;
`;

export const NickName = styled.div`
  ${ FontSmall }
  text-align: center;
  color: #212121;
`;

NickName.displayName = 'NickName';

export const Moves = styled.div`
  ${ FontSmall }
  text-align: center;
  color: #212121;
`;

Moves.displayName = 'Moves';

export const Fields = styled.div`
  padding: 0 0 10px 0;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

Fields.displayName = 'Fields';
