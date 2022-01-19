import React from 'react';
import styled from 'styled-components';

const AverageMarks = ({ average }) => {
  const Wrapper = styled.div`
    background-color: #cb8581;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50px;

    span {
      color: white;
      background-color: transparent;
      font-weight: 700;
      font-size: 12px;
    }
  `;

  return (
    <Wrapper>
      <span>{average}</span>
    </Wrapper>
  );
};

export default AverageMarks;
