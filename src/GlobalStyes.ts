import { createGlobalStyle } from "styled-components";
import "@fontsource/quicksand";

const GlobalStyles = createGlobalStyle`
 :root {
    --font-primary: "Quicksand", sans-serif;
 }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-primary);
  }

   h1,
  h2 {
    margin: 0;
    font-family: inherit
  }
`;

export default GlobalStyles;
