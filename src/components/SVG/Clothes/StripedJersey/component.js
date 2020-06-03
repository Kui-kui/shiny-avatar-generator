import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const StripedJersey = ({ color }) => {
  return (
    <Styled>
      <svg className="clothes" height="163" viewBox="0 0 318 163" width="318">
        <path
          d="M77 13.9999C84.5 28.4999 177 53.4999 244.5 31.9999C292.051 65.602 305.956 93.752 317.346 162.089H0C0 76.634 42.9996 33.3546 76.5352 13.7095L77 13.9999Z"
          fill={color}
        />
      </svg>
      <svg className="stripes" height="149" viewBox="0 0 318 149" width="318">
        <mask
          height="149"
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          width="318"
          x="0"
          y="0"
        >
          <path
            d="M77 0.290469C84.5 14.7905 177 39.7905 244.5 18.2905C292.051 51.8925 305.956 80.0425 317.346 148.379H0C0 62.9246 42.9996 19.6451 76.5352 0L77 0.290469Z"
            fill={color}
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M38 12C66 57.5 215.5 81.5 285.5 44"
            fill="none"
            stroke="white"
            strokeWidth="21"
          />
          <path
            d="M-5 101C10.5 116.5 82.5 157.5 150.5 157C218.5 156.5 289 152.5 327.5 129.5"
            fill="none"
            stroke="white"
            strokeWidth="21"
          />
          <path
            d="M15 52C30.5 67.5 102.5 108.5 170.5 108C238.5 107.5 289 103.5 327.5 80.5"
            fill="none"
            stroke="white"
            strokeWidth="21"
          />
        </g>
      </svg>
    </Styled>
  );
};

StripedJersey.propTypes = {
  color: PropTypes.string.isRequired,
};

export default StripedJersey;
