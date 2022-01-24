import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { render } from '@testing-library/react';
import React from 'react';

export const renderWithThemeProvider = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
