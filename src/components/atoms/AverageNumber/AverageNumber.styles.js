import styled, { css } from 'styled-components';

export const StyledAverageNumber = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.error};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50px;

    span {
      color: ${theme.color.white};
      background-color: transparent;
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.m};
    }
  `}
`;
