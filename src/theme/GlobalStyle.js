import { createGlobalStyle } from "styled-components";
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  :root {
    --color-white: #fefefe;
    --color-gray-100: #f5f5f5;
    --color-gray-500: #959393;
    --color-light: #fff7ea;
    --color-fontain-blue: #57b1b2;
    --color-dirty-blue: #458a97;
    --color-light-navy-blue: #33637c;
    --color-rhino: #213c61;
    --color-red-500: #f70d1a;
    --color-red-600: #ce0a17;
    --color-red-700: #a40812;
    --color-primary: var(--color-dirty-blue);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    background-color: var(--color-gray-100);
    line-height: 1.4;
    font-weight: 400;
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