import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  as: PropTypes.oneOf(['svg', 'symbol']),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  as: 'svg',
};

const SVGIconContainer = function SVGIconContainerComponent({
  as,
  height,
  width,
  viewBox,
  children,
  ...props
}) {
  if (as === 'symbol') {
    return (
      <symbol
        fill="currentColor"
        stroke="none"
        viewBox={viewBox || `0 0 ${width} ${height}`}
        height={height}
        width={width}
        {...props}
      >
        {children}
      </symbol>
    );
  }

  return (
    <svg
      style={{ pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="none"
      viewBox={viewBox || `0 0 ${width} ${height}`}
      height={height}
      width={width}
      {...props}
    >
      {children}
    </svg>
  );
};

SVGIconContainer.propTypes = propTypes;
SVGIconContainer.defaultProps = defaultProps;

export default SVGIconContainer;
