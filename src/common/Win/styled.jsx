import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
Wrapper.displayName = 'Wrapper';

export const Title = styled.div`
  font-size: 4.5vw;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: #212121;
`;
Title.displayName = 'Title';

export const Subtitle = styled.div`
  font-size: 3.5vw;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: #212121;
`;
Subtitle.displayName = 'Subtitle';


export const WrapperField = styled.div`
  display: flex;
`;
WrapperField.displayName = 'WrapperField';

export const Summary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
Summary.displayName = 'Summary';

export const Label = styled.div`
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  color: #212121;
  margin-right: 5px;
`;
export const NickName = styled.div`
  font-size: 2vw;
  text-align: center;
  color: #212121;
`;
NickName.displayName = 'NickName';

export const Moves = styled.div`
  font-size: 2vw;
  text-align: center;
  color: #212121;
`;
Moves.displayName = 'Moves';

export const Timer = styled.div`
  font-size: 2vw;
  text-align: center;
  color: #212121;
`;
Timer.displayName = 'Timer';

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

WrapperButtons.displayName = 'WrapperButtons';
