import React from 'react';
import styled from 'styled-components';
import Navigation from '../../organisms/Navigation/Navigation';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  overflow-x: scroll;
  height: 100vh;

  .content {
    margin: 38px 60px;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledMainTemplate>
      <Navigation />
      <div>
        <SearchBar />
        <div className={'content'}>{children}</div>
      </div>
    </StyledMainTemplate>
  );
};

export default MainTemplate;
