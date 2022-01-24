import styled from 'styled-components';

export const StyledSegment = styled.div`
  background: ${({ theme }) => theme.color.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
`;
