import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.lightPurple};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkGrey};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  padding: ${({ isBig }) => (isBig ? '6px 30px' : '6px 20px')};
  border-radius: 50px;
`;

export default Button;
