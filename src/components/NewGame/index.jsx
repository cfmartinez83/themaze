import React, { useState } from 'react';
import { CloseButton } from 'common/CloseButton/styled';
import { withRouter } from 'react-router-dom';
import { Wrapper, Title, Form } from './styled';
import Input from 'common/Input';
import { Label } from 'common/Label/styled';
import Button from 'common/Button';
import { useDispatch } from 'react-redux';
import { newGame } from 'store/game/actions';

const NewGame = ({ history }) => {
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState('');
  const handleOnChange = (value) => setNickName(value);

  const handleClose = () => history.push('/');
  const handleContinue = () => {
    if (nickName) {
      dispatch(newGame(nickName));
      history.push('/game/play');
    }
  }

  return <Wrapper>
    <CloseButton onClick={ handleClose } title="Close"/>
    <Title>New Game</Title>
    <Form>
      <Label>Nickname:</Label>
      <Input onChange={ handleOnChange } placeholder="Type your nickname" />
      <Button onClick={ handleContinue } disabled={ !nickName }>Continue</Button>
    </Form>
  </Wrapper>
};

export default withRouter(NewGame);
