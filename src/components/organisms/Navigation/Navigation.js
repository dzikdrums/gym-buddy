import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  border-right: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};
  align-items: flex-end;

  .logo {
    background-color: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    padding: 13px;
    text-align: end;
    margin-bottom: 45px;
  }

  a {
    padding-right: 24px;
    margin-bottom: 17px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.darkGrey};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className={'logo'}>
        Study <br /> buddy
      </div>
      <Link to={'/'}>Dashboard</Link>
      <Link to={'/'}>Notes</Link>
      <Link to={'/addUser'}>Settings</Link>
      <Link to={'/addUser'}>Logout</Link>
    </StyledNavigation>
  );
};

export default Navigation;
