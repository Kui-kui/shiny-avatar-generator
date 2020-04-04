import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const Hair1 = ({ color }) => (
  <Styled>
    <svg
      className="hair_left"
      fill="none"
      height="162"
      viewBox="0 0 71 162"
      width="71"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.5001 55C42.3001 33.4 53.3333 33.3333 65 36C65 26.1667 77.3001 7.3 64.5 2.5C48.4999 -3.5 23.5 6 14 24.5C4.5 43 -2 134 1.5 157.5C10.6667 160.333 31.5001 164.3 41.5001 157.5C42.5001 146.5 22.5001 82 33.5001 55Z"
        fill={color}
      />
    </svg>
    <svg
      className="hair_right"
      fill="none"
      height="169"
      viewBox="0 0 114 169"
      width="114"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70.9999 43C61.3999 34.6 25.6666 38 16 43C8.16664 41.5 -7.78677 33.9406 5.49997 17C25.5 -8.50002 69.5002 -2.49998 86.5 26C100.793 49.9625 117 107 112.5 162C107.5 166.667 97.1998 171.8 77.9998 165C82.9998 148 82.9999 53.5 70.9999 43Z"
        fill={color}
      />
    </svg>
  </Styled>
);

Hair1.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair1;
