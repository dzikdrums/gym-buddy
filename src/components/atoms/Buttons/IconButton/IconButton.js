import React from 'react';
import { StyledButton } from './IconButton.styles';

const IconButton = ({ isSecondary, children, ...props }) => (
  <StyledButton isSecondary={isSecondary} {...props}>
    {children}
  </StyledButton>
);

export default IconButton;
