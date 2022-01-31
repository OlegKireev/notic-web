import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: .375em .75em;
  border: 0;
  border-radius: .375em;
  cursor: pointer;
  transition: .1s ease;
  transition-property: background-color, color, fill;
`;

export const PrimaryButton = styled(Button)`
  color: ${({ kind }) => (kind === 'text' ? '#0077cc' : '#ffffff')};
  background-color: ${({ kind }) => (kind === 'text' ? 'transparent' : '#0077cc')};

  :hover {
    background-color: ${({ kind }) => (kind === 'text' ? 'transparent' : '#0088dd')};
    color: ${({ kind }) => (kind === 'text' ? '#0088dd' : 'ffffff')};
    text-decoration: ${({ kind }) => (kind === 'text' ? 'underline' : 'none')};
  }

  :active {
    background-color: ${({ kind }) => (kind === 'text' ? 'transparent' : '#005fa3')};
    color: ${({ kind }) => (kind === 'text' ? '#005fa3' : 'ffffff')};
  }
`;

export const ButtonGhost = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25em;
  color: var(--color-primary);
  fill: var(--color-primary);
  background-color: transparent;

  :hover {
    color: var(--color-light-navy-blue);
    fill: var(--color-light-navy-blue);
  }

  :active {
    color: var(--color-rhino);
    fill: var(--color-rhino);
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: var(--color-red-500);
  color: var(--color-white);

  :hover {
    background-color: var(--color-red-600)
  }

  :active {
    background-color: var(--color-red-700)
  }
`;

export default PrimaryButton;
