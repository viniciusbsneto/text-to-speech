import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5;
    color: #170C3A;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 20px Source Sans Pro, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
