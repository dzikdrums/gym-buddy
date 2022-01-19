import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './Button.styles';

const Button = ({ isSecondary, children }) => <StyledButton isSecondary={isSecondary}>{children}</StyledButton>;

export default Button;
