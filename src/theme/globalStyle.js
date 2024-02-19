import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

import RobotoRegular from '../assets/fonts/roboto-v20-latin_cyrillic-regular.woff';
import RobotoRegular2 from '../assets/fonts/roboto-v20-latin_cyrillic-regular.woff2';
import RobotoMiddle from '../assets/fonts/roboto-v20-latin_cyrillic-500.woff';
import RobotoMiddle2 from '../assets/fonts/roboto-v20-latin_cyrillic-500.woff2';
import RobotoBig from '../assets/fonts/roboto-v20-latin_cyrillic-700.woff';
import RobotoBig2 from '../assets/fonts/roboto-v20-latin_cyrillic-700.woff2';

const GlobalStyle = createGlobalStyle`
 ${normalize}

 @font-face {
  font-family: "Roboto";
  font-weight: normal;
  font-style: normal;
  font-display: swap;

  src: url(${RobotoRegular2}) format("woff2"),
  url(${RobotoRegular}) format("woff");
}

@font-face {
  font-family: "Roboto-midle";
  font-weight: 500;
  font-style: normal;
  font-display: swap;

  src: url(${RobotoMiddle2}) format("woff2"),
  url(${RobotoMiddle}) format("woff");
}

@font-face {
  font-family: "Roboto-big";
  font-weight: 700;
  font-style: normal;
  font-display: swap;

 src: url(${RobotoBig2}) format("woff2"),
  url(${RobotoBig}) format("woff");
}

html {
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
 font-family: "Roboto", "Arial", sans-serif;
 width: 100%;
 height: 100vh;
 margin: 0;
 padding: 0;
 overflow-x: hidden
}

#root {
 display: flex;
 flex-direction: column;
 height: 100%;
}

main {
 position: relative;
 flex: 1 0 auto;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

 p {
  margin-top: 0;
  margin-bottom: 0;
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
