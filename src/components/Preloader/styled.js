import styled from 'styled-components';
import { fadeIn } from '@/theme/keyframes';

export const Wrapper = styled.div`

  --size: 24px;
  --color: #000000;

  display: flex;
  height: var(--size);
  justify-content: center;
  overflow: hidden;
  width: var(--size);
  width: 100%;
`;

export const StyledPreloader = styled.div`
  backface-visibility: hidden;
  height: 100%;
  position: relative;
  transform: translateZ(0) translateX(45%);

  & div {
    background: var(--color);
    border-radius: calc(var(--size) / 50);
    box-sizing: content-box;
    height: calc(var(--size) / 4);
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: calc(var(--size) / 20) calc(var(--size) / 2);
    width: calc(calc(var(--size) / 10));
    animation: ${fadeIn} linear 1s infinite;

    &:nth-child(1) {
      animation-delay: -.917s;
      background: var(--color);
      transform: rotate(0deg);
    }

    &:nth-child(2) {
      animation-delay: -.833s;
      background: var(--color);
      transform: rotate(30deg);
    }

    &:nth-child(3) {
      animation-delay: -.75s;
      background: var(--color);
      transform: rotate(60deg);
    }

    &:nth-child(4) {
      animation-delay: -.666s;
      background: var(--color);
      transform: rotate(90deg);
    }

    &:nth-child(5) {
      animation-delay: -.583s;
      background: var(--color);
      transform: rotate(120deg);
    }

    &:nth-child(6) {
      animation-delay: -.5s;
      background: var(--color);
      transform: rotate(150deg);
    }

    &:nth-child(8) {
      animation-delay: -.333s;
      background: var(--color);
      transform: rotate(210deg);
    }

    &:nth-child(7) {
      animation-delay: -.416s;
      background: var(--color);
      transform: rotate(180deg);
    }

    &:nth-child(9) {
      animation-delay: -.25s;
      background: var(--color);
      transform: rotate(240deg);
    }

    &:nth-child(10) {
      animation-delay: -.166s;
      background: var(--color);
      transform: rotate(270deg);
    }

    &:nth-child(11) {
      animation-delay: -.083s;
      background: var(--color);
      transform: rotate(300deg);
    }

    &:nth-child(12) {
      animation-delay: 0s;
      background: var(--color);
      transform: rotate(330deg);
    }
  }
`;
