import styled from 'styled-components';
import { fadeIn } from '@/theme/keyframes';
import { slideDown } from '../../theme/keyframes';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .425);
  backdrop-filter: blur(.5px);
  animation: ${fadeIn} .2s ease, ${slideDown} .2s ease;
`;

export const Dialog = styled.div`
  min-width: 25vw;
  min-height: 10vh;
  background-color: var(--color-white);
  border-radius: .25em;
  box-shadow: 0px 0px 30px 3px rgba(33, 60, 97, 0.1);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 1em 0;
`;

export const Content = styled.div`
  padding: 1em;
`;

export const Footer = styled.footer`
  background-color: var(--color-gray-100);
  padding: 1em;
`;
