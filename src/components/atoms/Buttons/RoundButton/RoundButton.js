import React from 'react';
import styled from 'styled-components';

const RoundButton = ({ isSecondary, children }) => {
  const Wrapper = styled.div`
    background-color: ${({ isSecondary }) => (isSecondary ? '#c0c7d6' : '#8FCB81')};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    border-radius: 50px;
    color: white;
    margin-left: 14px;
  `;

  return <Wrapper isSecondary={isSecondary}>{children}</Wrapper>;
};

export default RoundButton;
