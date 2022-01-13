import React from 'react';
import Button from 'common/Button';
import { Wrapper, Title, Subtitle, Summary, WrapperField, Label, NickName, Moves, Timer, WrapperButtons } from './styled';
import { withRouter } from 'react-router-dom';
import { getTime } from 'helpers/time';

const Win = ({ nickName, moves, time, playAgainCallback, history }) => {
  const handleVisitLeaderBoard  = () => history.push('/leaderboard');
  return <Wrapper>
    <Title>You COMPLETE the MAZE! </Title>
    <Subtitle>Don't forget to visit the leaderboard to check your score.</Subtitle>
    <Summary>
      <WrapperField>
        <Label>NickName:</Label>
        <NickName>{ nickName || 'Unknown' }</NickName>
      </WrapperField>
      <WrapperField>
        <Label>Moves:</Label>
        <Moves>{ moves }</Moves>
      </WrapperField>
      <WrapperField>
        <Label>Time:</Label>
        <Timer>{ getTime(time) }</Timer>
      </WrapperField>
    </Summary>
    <WrapperButtons>
      <Button onClick={ playAgainCallback }>Play Again</Button>
      <Button onClick={ handleVisitLeaderBoard }>LeaderBoard</Button>
    </WrapperButtons>
  </Wrapper>;
};

export default withRouter(Win);
