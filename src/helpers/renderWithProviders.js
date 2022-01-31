import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { render } from '@testing-library/react';
import React from 'react';
import UserContextProvider from '../contexts/UsersContextProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UserContextProvider>{children}</UserContextProvider>
    </ThemeProvider>
  );
};
