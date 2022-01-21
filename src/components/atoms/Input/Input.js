import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 25px;
    border: ${`1px solid ${theme.color.grey}`};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    padding: 0.5rem 1rem;
    transition: box-shadow 0.05s ease-in-out;
    will-change: box-shadow;
    margin-bottom: 17px;

    &::placeholder {
      color: ${({ theme }) => theme.color.grey};
    }

    &:focus {
      outline: none;
      box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
    }
  `}
`;

export default Input;
