import styled from "styled-components";
import { widths } from "@/constants/breakpoints";

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li:not(:last-child) {
    margin-bottom: .5em;
  }

  a {
    font-weight: bold;
    font-size: .875em;
    color: #333;
    text-decoration: none; 
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus-visible {
    color: #0077cc;
  }

  a.active {
    text-decoration: underline;
  }

  @media screen and (max-width: ${widths.md}) {
    display: flex;

    li:not(:last-child) {
      margin-bottom: 0;
      margin-right: .5em;
    }

    a {
      font-size: .875rem
    }
  }
`;