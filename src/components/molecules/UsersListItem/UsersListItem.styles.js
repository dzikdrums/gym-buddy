import styled, { css } from 'styled-components';

export const StyledUsersListItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: ${`1px solid ${theme.color.grey}`};

    &:last-child {
      border-bottom: none;
    }

    .user-details-wrapper {
      display: flex;
    }

    .user-details {
      margin-left: 24px;
      color: ${theme.color.darkGrey};
    }

    .name {
      font-size: ${theme.fontSize.l};
      font-weight: ${theme.fontWeight.bold};
    }

    .attendance {
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`;
