import React from 'react';
import Input from '../../atoms/Input/Input';
import { StyledSearchBar } from './SearchBar.styles';

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
