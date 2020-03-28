import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const Clothes = ({ color }) => (
  <Styled>
    <svg
      className="clothes"
      fill="none"
      height="163"
      viewBox="0 0 286 163"
      width="286"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M172.928 2.50297C166.841 21.9838 142.846 24.8102 129.627 9.15595L121.974 0.111286C121.974 0.111286 105.798 -0.584451 96.9273 1.50278C77.1511 6.04595 24.0638 29.2492 0.518188 93.3252C10.8544 99.7567 35.6684 112.025 45.5 113.5C41.5055 124.757 39.6208 145.246 40.2293 163.089H255.249C252.901 146.77 246.27 128.238 242.099 116.579L242.099 116.579L242.098 116.578C241.709 115.489 241.341 114.461 241 113.5C250.902 112.015 275.02 100.072 285.201 93.6885C245.066 10.0456 172.928 2.50297 172.928 2.50297Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  </Styled>
);

Clothes.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Clothes;
