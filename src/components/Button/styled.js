import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: .375em .75em;
  border: 0;
  border-radius: .375em;
  cursor: pointer;
  color: #ffffff;
  background-color: #0077cc;
  transition: background-color .1s ease;

  :hover {
    background-color: #0088dd;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;