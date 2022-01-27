import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

const StyledSearchBar = styled.div`
  display: flex;
  padding: 24px 38px 9px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};
  grid-column: 2/3;
  grid-row: 1/2;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 45px;

    span:last-of-type {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      text-align: end;
    }

    ${Input} {
      width: 100%;
    }
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <div>
        <span>Logged as:</span>
        <span>Teacher</span>
      </div>
      <Input placeholder={'find student'} />
    </StyledSearchBar>
  );
};

export default SearchBar;
