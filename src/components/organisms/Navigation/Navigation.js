import React from 'react';
import { StyledLink, StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className={'logo'}>
        Study <br /> buddy
      </div>
      <StyledLink to={'/'}>Students List</StyledLink>
      <StyledLink to={'/addUser'}>Add Student</StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;
