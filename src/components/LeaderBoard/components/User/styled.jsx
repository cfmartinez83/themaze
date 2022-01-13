import styled from 'styled-components';

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
    font-size: 1.25rem;
    font-weight: bold;
    color: #212121;
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

Wrapper.displayName = 'Wrapper';

export const Position = styled.div`
  width: 15%;
  min-width: 40px;
`;

Position.displayName = 'Position';

export const Name = styled.div`
  width: 60%;
`;

Name.displayName = 'Name';

export const Moves = styled.div`
  width: 25%;
  min-width: 40px;
  font-weight: bold;
`;

Moves.displayName = 'Moves';

export const Time = styled.div`
  width: 25%;
  min-width: 40px;
  font-weight: bold;
`;

Time.displayName = 'Time';
