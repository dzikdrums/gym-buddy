import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
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
`;

export const StyledLink = styled(NavLink)`
  padding-right: 24px;
  margin-bottom: 17px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  position: relative;

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.color.darkPurple};
    width: 15px;
    height: 3px;
  }

  &.active {
    ::after {
      opacity: 1;
    }
  }
`;
