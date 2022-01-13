import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ee7752, #23a6d5, #23d5ab);
    background-size: 100% 100%;
  }
  
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
