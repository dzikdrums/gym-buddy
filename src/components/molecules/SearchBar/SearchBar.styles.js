import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  padding: 24px 38px 9px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.darkPurple}`};
  grid-column: 2/3;
  grid-row: 1/2;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 30px;

    span {
      white-space: nowrap;
    }

    span:last-of-type {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      text-align: end;
    }
  }

  input {
    width: 100%;
    max-width: 350px;
    border: none;
  }
`;
