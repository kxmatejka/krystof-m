import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    min-height: 100%;
  }

  body {
    --light: #e8e8e8;
    --dark: #111c2a;
    --dark-low-contrast: #2f353d;
    --highlight: #1cbb64;

    margin: 0;
    padding: 0;
    background: #ced2d7;
    color: var(--light);
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }
`
