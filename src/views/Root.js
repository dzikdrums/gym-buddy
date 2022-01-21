import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledRoot } from './Root.styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddUserForm from '../components/organisms/AddUserForm/AddUserForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Root = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <GlobalStyle />
        <StyledRoot>
          <Link to={'/'}>UsersList</Link>
          <Link to={'/addUser'}>Add User</Link>
          <Routes>
            <Route path={'addUser'} element={<AddUserForm />} />
            <Route path={'/'} element={<UsersList />} />
          </Routes>
        </StyledRoot>
      </Router>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
