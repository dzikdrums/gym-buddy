import Dashboard from 'views/Dashboard';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledRoot } from './Root.styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddUser from './AddUser';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';

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
        <MainTemplate>
          <Routes>
            <Route path={'/'} element={<Navigate replace to="/group" />} />
            <Route path={'addUser'} element={<AddUser />} />
            <Route path={'/group'} element={<Dashboard />} />
            <Route path={'/group/:id'} element={<Dashboard />} />
          </Routes>
        </MainTemplate>
      </StyledRoot>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
