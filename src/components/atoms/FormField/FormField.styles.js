import styled from 'styled-components';

export const StyledButton = styled.div`
  background-color: ${({ isSecondary }) => (isSecondary ? '#c0c7d6' : '#8FCB81')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50px;
  color: ${({ theme }) => theme.color.white};
  margin-left: 14px;
`;
