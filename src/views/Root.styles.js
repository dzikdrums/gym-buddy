import styled from 'styled-components';

export const StyledRoot = styled.div`
  background: ${({ theme }) => theme.color.lightgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
