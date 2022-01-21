import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background: ${({ theme }) => theme.color.lightGrey};
  }
  
  * {
    color: ${({ theme }) => theme.color.darkGrey};
  }

  *, *:after, *:after {
    box-sizing: content-box;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif; 
  }
  
  a {
   text-decoration: none; 
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
`;
