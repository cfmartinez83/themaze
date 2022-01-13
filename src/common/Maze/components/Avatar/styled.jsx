import styled from 'styled-components';
import { Breath } from 'styles/effects';

export const Face = styled.div`
  background-color: #fcba03;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Face.displayName = 'Face';

export const Eyes = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 25%;
  & > div:not(:last-child) {
    margin-right: 5px;
  }
`;

Eyes.displayName = 'Eyes';

export const Eye = styled.div`
  background-color: #000;
  width: 20%;
  height: 100%;
  border-radius: 30px;
  position: relative;
  &:after {
    background-color: #fff;
    width: 50%;
    height: 50%;
    border-radius: 5px;
    content: ' ';
    position: absolute;
    margin: 2px;
  }
`;

Eye.displayName = 'Eye';

export const Mouth = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  height: 50%;
  background-color: #fff;
  border-radius: 7px 7px 100px 100px;
  ${ Breath }
  &:after {
    content: '';
    position: absolute;
  }
`;

Mouth.displayName = 'Mouth';
