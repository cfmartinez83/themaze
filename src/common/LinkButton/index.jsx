import React from 'react';
import { StyledLinkButton } from 'common/LinkButton/styled';

const LinkButton = ({ href, children }) => {
  return <StyledLinkButton href={ href }>{ children }</StyledLinkButton>;
};

export default LinkButton;
