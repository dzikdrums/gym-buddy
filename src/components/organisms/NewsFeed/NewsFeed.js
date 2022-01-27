import React from 'react';
import styled from 'styled-components';

export const StyledNewsFeed = styled.div`
  border-left: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};
  grid-column: 3/4;
  grid-row: 1/3;
`;

const NewsFeed = () => {
  return (
    <StyledNewsFeed>
      <p>Lorem Ipsum</p>
    </StyledNewsFeed>
  );
};

export default NewsFeed;
