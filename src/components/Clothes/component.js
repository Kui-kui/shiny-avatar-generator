import React from 'react';
import PropTypes from 'prop-types';

const Clothes = ({ className, color }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="163"
      viewBox="0 0 318 163"
      width="318"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M183.928 2.50297C177.841 21.9838 153.846 24.8102 140.627 9.15595L132.974 0.111286C132.974 0.111286 116.798 -0.584451 107.927 1.50278C82.1848 7.41659 0 44.948 0 163.089C65.7481 163.089 317.346 163.089 317.346 163.089C292.473 13.8522 183.928 2.50297 183.928 2.50297Z"
        fill={color}
      />
    </svg>
  );
};

Clothes.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Clothes;
