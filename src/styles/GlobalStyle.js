import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F2F2F2;
    color: #111111;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex-grow: 1;
    background-color: paleturquoise;
  }
`;