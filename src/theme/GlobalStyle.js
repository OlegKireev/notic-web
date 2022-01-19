import { createGlobalStyle } from "styled-components";
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  :root {
    --color-light: #f4edd8;
    --color-fontain-blue: #57b1b2;
    --color-dirty-blue: #458a97;
    --color-light-navy-blue: #33637c;
    --color-rhino: #213c61;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: #fff;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
  }
  
  a:link,
  a:visited {
    color: var(--color-fontain-blue);

    &:hover {
      color: var(--color-dirty-blue);
    }
  }

  #root {
    min-height: 100vh;
    height: 1px;
  }
`;