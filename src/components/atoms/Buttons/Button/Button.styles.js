import styled from 'styled-components';

export const StyledButton = styled.button`
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
  padding: 20px 60px;
  border-radius: 50px;
`;
