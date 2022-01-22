import styled from 'styled-components';
import Button from '../Button/styled';
import NoteComponent from '../Note';

export const Wrapper = styled.div`

& code {
  white-space: pre-wrap;
}
`;

export const Note = styled(NoteComponent)`
  transition: background-color .2s ease;

  :hover {
    cursor: pointer;
    background-color: #fff9ea;
  }
`

export const LoadMoreButton = styled(Button)`
  width: 100%;
  margin-top: 1em;
`