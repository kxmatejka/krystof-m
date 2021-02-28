import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    --light: #eee;
    --dark: #111c2a;
    --dark-low-contrast: #2f353d;
    --highlight: #1cbb64;

    margin: 0;
    padding: 0;
    background: var(--dark);
    color: var(--light);
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }
`
