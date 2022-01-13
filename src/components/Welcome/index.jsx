import Logo from 'common/Logo';
import React from 'react';
import { Wrapper, WrapperButtons } from './styled';
import LinkButton from 'common/LinkButton';
import { Title } from 'components/Game/styled';

const Welcome = () => {
  return <Wrapper>
    <Logo />
    <WrapperButtons>
      <Title>Welcome!</Title>
      <LinkButton href="/game/new">Play</LinkButton>
      <LinkButton href="/leaderboard">LeaderBoard</LinkButton>
    </WrapperButtons>
  </Wrapper>;
}

export default Welcome;
