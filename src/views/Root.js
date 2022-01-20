import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledRoot } from './Root.styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddUserForm from '../components/organisms/AddUserForm/AddUserForm';

const Root = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <StyledRoot>
        <AddUserForm />
        <UsersList />
      </StyledRoot>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
