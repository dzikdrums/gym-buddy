import styled, { css } from 'styled-components';

const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.color.darkGrey};
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.fontWeight.bold};
    text-transform: capitalize;
    margin-bottom: 5px;
  `}
`;

export default Label;
