import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: .375em .75em;
  border: 0;
  border-radius: .375em;
  cursor: pointer;
  color: ${({kind}) => kind === 'text' ? '#0077cc' : '#ffffff'};
  background-color: ${({kind}) => kind === 'text' ? 'transparent' : '#0077cc'};
  transition: background-color .1s ease;

  :hover {
    background-color: ${({kind}) => kind === 'text' ? 'transparent' : '#0088dd'};
    color: ${({kind}) => kind === 'text' ? '#0088dd' : 'ffffff'};
    text-decoration: ${({kind}) => kind === 'text' ? 'underline' : 'none'};
  }

  :active {
    background-color: ${({kind}) => kind === 'text' ? 'transparent' : '#005fa3'};
    color: ${({kind}) => kind === 'text' ? '#005fa3' : 'ffffff'};
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: var(--color-red-500);

  :hover {
    background-color: var(--color-red-600)
  }

  :active {
    background-color: var(--color-red-700)
  }
`;

export default Button;