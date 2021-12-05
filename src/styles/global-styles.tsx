import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    font-family: NanumSquareR;
    color: #404040;
  }

  .outer {
    height: 80vh;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &::webkit-scrollbar {
      display: none;
    }
  }

  * {
    box-sizing: border-box;
    ::selection {
      background: #373737;
      color: white;
    }
  }
`;

export default GlobalStyle;
