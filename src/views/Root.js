import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledRoot } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledRoot>
      <UsersList />
    </StyledRoot>
  </ThemeProvider>
);

export default Root;
