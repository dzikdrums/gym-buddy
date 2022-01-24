import Dashboard from 'views/Dashboard';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledRoot } from './Root.styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddUser from './AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import UserContextProvider from '../contexts/UsersContext';

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
        <UserContextProvider>
          <StyledRoot>
            <MainTemplate>
              <Routes>
                <Route path={'addUser'} element={<AddUser />} />
                <Route path={'/'} element={<Dashboard />} />
              </Routes>
            </MainTemplate>
          </StyledRoot>
        </UserContextProvider>
      </Router>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
