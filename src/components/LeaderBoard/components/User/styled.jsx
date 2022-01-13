import styled from 'styled-components';
import { FontMedium } from 'styles/font';
import { device } from 'styles/size';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: center;

  & > div {
    padding: 10px;
    border: 1px solid #dddddd;
    text-align: center;
    background: #fafafa;
    ${FontMedium}
    color: #212121;
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
  @media ${device.tablet} {
    width: 95%;
  }
`;

Wrapper.displayName = 'Wrapper';

export const Position = styled.div`
  width: 5%;
  min-width: 22px;
`;

Position.displayName = 'Position';

export const Name = styled.div`
  width: 60%;
`;

Name.displayName = 'Name';

export const Moves = styled.div`
  width: 25%;
  min-width: 40px;
`;

Moves.displayName = 'Moves';

export const Time = styled.div`
  width: 25%;
  min-width: 40px;
`;

Time.displayName = 'Time';
