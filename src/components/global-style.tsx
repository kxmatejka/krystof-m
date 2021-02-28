import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    --light-color: #eee;
    --dark-color: #111c2a;
    --dark-low-contrast: #2f353d;
    --highlight: #1cbb64;
    --highlight-hover: #1c76bb;

    margin: 0;
    padding: 0;
    background: var(--dark-color);
  }
`
