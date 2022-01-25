import styled from "styled-components";
import { widths } from "@/constants/breakpoints";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  min-height: 3em;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e7e8ec;
  z-index: 1;
`;

export const Logo = styled.img`
  @media screen and (max-width: ${widths.md}) {
    height: 20px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
