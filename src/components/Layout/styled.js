import styled from 'styled-components';
import { widths } from '@/constants/breakpoints';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;

    @media screen and (max-width: ${widths.md}) {
      flex-direction: column;
    }
`;

export const Aside = styled.aside`
  padding: 1em;
  background: var(--color-white);
  width: 15.75rem;
  height: 100%;
  flex-shrink: 0;

  @media (max-width: ${widths.md}) {
    height: auto;
    width: auto;
    padding: .5em 1em;
  }
`;

export const Main = styled.main`
  overflow-y: scroll;
  padding: 1em;
  min-height: 100%;
  width: 100%;
`;
