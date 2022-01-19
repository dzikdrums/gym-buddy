import React from 'react';
import { StyledAverageNumber } from './AverageNumber.styles';

const AverageNumber = ({ average }) => {
  return (
    <StyledAverageNumber>
      <span>{average}</span>
    </StyledAverageNumber>
  );
};

export default AverageNumber;
