import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    width: 100%;
    height: 100%;
  }

  html,
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: NanumSquareR;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
