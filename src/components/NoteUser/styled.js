import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

export const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const EditLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em;
`;

export const DeleteButton = styled(Button)`
  padding: .5em;
`;
