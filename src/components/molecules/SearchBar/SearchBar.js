import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

const StyledSearchBar = styled.div`
  display: flex;
  padding: 24px 38px 9px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};

  div {
    display: flex;
    flex-direction: column;
    margin-right: 45px;

    span:last-of-type {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      text-align: end;
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
