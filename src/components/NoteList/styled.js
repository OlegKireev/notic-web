import styled from 'styled-components';
import Button from '../Button/styled';
import NoteComponent from '../Note';

export const Wrapper = styled.div`

& code {
  white-space: pre-wrap;
}
`;

export const Note = styled(NoteComponent)`
  border: 2px solid transparent;

  :hover {
    cursor: pointer;
    background-color: var(--color-catskill-white);
    border-color: var(--color-fontain-blue);
  }
`

export const LoadMoreButton = styled(Button)`
  width: 100%;
  margin-top: 1em;
`