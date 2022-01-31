import React from 'react';
import PropTypes from 'prop-types';
import { StyledPreloader, Wrapper } from './styled';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: '#33637c',
  size: 24,
};

const Preloader = function Preloader({
  color,
  size,
}) {
  return (
    <Wrapper
      style={{
        '--color': color,
        '--size': `${size}px`,
      }}
    >
      <StyledPreloader>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </StyledPreloader>
    </Wrapper>
  );
};

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;

export default Preloader;
