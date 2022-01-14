import styled from 'styled-components';
import Button from '../Button/styled';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const List = styled.div`
  > *:not(:last-child) {
    margin-bottom: 2em;
    padding-bottom: 2em;
    border-bottom: 1px solid #f5f4f0;
  }
`;

export const LoadMoreButton = styled(Button)`
  width: 100%;
  margin-top: 1em;
`