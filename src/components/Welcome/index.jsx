import Logo from 'common/Logo';
import React from 'react';
import { Wrapper, WrapperButtons } from './styled';
import LinkButton from 'common/LinkButton';

const Welcome = () => {
  return <Wrapper>
    <Logo />
    <WrapperButtons>
      <LinkButton href="/game/new">Play</LinkButton>
      <LinkButton href="/leaderboard">LeaderBoard</LinkButton>
    </WrapperButtons>
  </Wrapper>;
}

export default Welcome;
