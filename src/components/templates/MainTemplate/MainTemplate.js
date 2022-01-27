import React from 'react';
import styled from 'styled-components';
import Navigation from '../../organisms/Navigation/Navigation';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import NewsFeed from '../../organisms/NewsFeed/NewsFeed';

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 84px 1fr;
  overflow-x: scroll;
  height: 100vh;
  width: 100%;

  .content {
    margin: 38px 60px;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledMainTemplate>
      <Navigation />
      <SearchBar />
      <div className={'content'}>{children}</div>
      <NewsFeed />
    </StyledMainTemplate>
  );
};

export default MainTemplate;
