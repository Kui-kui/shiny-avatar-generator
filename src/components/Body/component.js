import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ className, color }) => (
  <svg
    className={className}
    fill="none"
    height="164"
    viewBox="0 0 318 164"
    width="318"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M183.928 3.1778C177.841 22.6586 153.846 25.485 140.627 9.83078L132.974 0.786122C132.974 0.786122 116.798 0.0903844 107.927 2.17761C82.1848 8.09142 0 45.6228 0 163.764C65.7481 163.764 317.346 163.764 317.346 163.764C292.473 14.527 183.928 3.1778 183.928 3.1778Z"
      fill={color}
    />
  </svg>
);

Body.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Body;
