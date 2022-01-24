import React from 'react';
import { StyledLink, StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className={'logo'}>
        Study <br /> buddy
      </div>
      <StyledLink to={'/'}>Dashboard</StyledLink>
      <StyledLink to={'/addUser'}>Settings</StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;
