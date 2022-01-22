import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  columns: PropTypes.number,
  row: PropTypes.number,
  children: PropTypes.node,
};
const defaultProps = {
  columns: 2,
  gap: 16,
  children: null,
};

const MasonryLayout = ({
  columns,
  gap,
  children,
}) => {
  const columnWrapper = {};
  const result = [];
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px`}}>
        {children[i]}
      </div>
    );
  }
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex' }}>
      {result}
      </div>
  )
};

MasonryLayout.propTypes = propTypes;
MasonryLayout.defaultProps = defaultProps;

export default MasonryLayout;