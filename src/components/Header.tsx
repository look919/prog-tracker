import React from 'react';
import { StyledHeader, Logo } from '../styles/Header';
import LogoImg from '../img/header.png';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={LogoImg} alt='logo' />
    </StyledHeader>
  );
};
