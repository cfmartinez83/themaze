import { CloseButton } from 'common/CloseButton/styled';
import User from 'components/LeaderBoard/components/User';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectUsers } from 'store/leaderboard/selectors';
import { getTime } from 'helpers/time';
import { Wrapper, Title, Table, Empty } from './styled';

const LeaderBoard = ({ history }) => {
  const users = useSelector(selectUsers);
  return <Wrapper>
    <CloseButton onClick={() => history.push('/')} title="Close"/>
    <Title>LeaderBoard</Title>
    <Table>
      <User position={'#'} name="Name" moves="Moves" time="Time"></User>
      { users.length === 0 && <Empty>No data</Empty> }
      { users.map((user, i) => {
        return <User key={ `${i}${user.nickName}${user.time}` } position={ i + 1 } name={ user.nickName } moves={ user.moves } time={ getTime(user.time) } />
      })}
    </Table>
  </Wrapper>
};

export default withRouter(LeaderBoard);
