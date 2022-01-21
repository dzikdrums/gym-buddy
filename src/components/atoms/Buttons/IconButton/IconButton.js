import React from 'react';
import { StyledButton } from './IconButton.styles';

const IconButton = ({ isSecondary, children }) => <StyledButton isSecondary={isSecondary}>{children}</StyledButton>;

export default IconButton;
