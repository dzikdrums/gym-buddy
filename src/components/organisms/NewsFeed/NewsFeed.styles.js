import styled, { css } from 'styled-components';

export const StyledNewsFeed = styled.div`
  border-left: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};
  grid-column: 3/4;
  grid-row: 1/3;
  padding: 31px 45px;
  overflow-y: scroll;
`;

export const StyledNewsCard = styled.div`
  ${({ theme }) => css`
    .title {
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
    }

    .subtitle {
      font-size: ${theme.fontSize.m};
      margin-bottom: 12px;
    }

    .content-wrapper {
      display: flex;
      align-items: start;

      img {
        max-width: 150px;
        object-fit: contain;
        margin-left: 10px;
      }
    }

    .content {
      font-size: ${theme.fontSize.s};
      line-height: 16px;
      margin-bottom: 37px;
    }
  `}
`;
