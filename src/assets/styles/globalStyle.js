import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif; 
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
