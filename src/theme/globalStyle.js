import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 ${normalize}
 
 @font-face {
  font-family: "Roboto";
  font-weight: normal;
  font-style: normal;
  font-display: swap;

  src: url("../assets/fonts/roboto-v20-latin_cyrillic-regular.woff2") format("woff2"),
  url("../assets/fonts/roboto-v20-latin_cyrillic-regular.woff") format("woff");
}

@font-face {
  font-family: "Roboto";
  font-weight: 500;
  font-style: normal;
  font-display: swap;

  src: url("../assets/fonts/roboto-v20-latin_cyrillic-500.woff2") format("woff2"),
  url("../assets/fonts/roboto-v20-latin_cyrillic-500.woff") format("woff");
}

@font-face {
  font-family: "Roboto";
  font-weight: 700;
  font-style: normal;
  font-display: swap;

  src: url("../assets/fonts/roboto-v20-latin_cyrillic-700.woff2") format("woff2"),
  url("../assets/fonts/roboto-v20-latin_cyrillic-700.woff") format("woff");
}

html {
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", "Arial", sans-serif;
  width: 100%;
  margin: auto;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.hidden {
  display: none;
}

.visually-hidden {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
`;

export default GlobalStyle;
