import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';

import Styled from './styles';

const LongAndVoluminous = ({ color }) => {
  const shadowColor = Color(color).darken(0.3).hex();
  return (
    <Styled>
      <svg className="hair_left" height="349" viewBox="0 0 115 349" width="115">
        <path
          d="M75 54.1748C85.8 48.1748 97.3333 37.3415 102 31.6748C88.5 12.1748 144 0.174845 92 0.174835C40 0.174826 15.5 98.6749 15.5 118.675C15.5 138.675 14.5 169.175 15.5 193.175C16.5 217.175 -4.00001 228.675 8.49998 268.175C15.3152 289.711 -6.00002 372.675 1.99996 358.175C5.59066 351.666 86 373.175 86 367.675C86 362.175 55.5 335.175 60.5 315.675C65.5 296.175 86.5 251.175 86 233.675C85.5 216.175 75 205.175 75 189.175V132.675C75 112.675 69 102.675 65 90.6749C61 78.6749 61.5 61.6748 75 54.1748Z"
          fill={color}
        />
      </svg>
      <svg
        className="hair_right"
        height="246"
        viewBox="0 0 138 246"
        width="138"
      >
        <path
          d="M64 48.6748C52 33.0748 19.3333 37.8415 6.5 41.1748C-0.333333 33.1748 -4.75063 2.32901 12.5 0.674843C85.5 -6.32516 97.9999 42.6749 106.5 76.1749C115 109.675 103.314 140.163 116.5 156.175C137.5 181.675 137 219.675 137.5 245.175C128 230.175 101 221.175 85.5 210.675C70 200.175 75.5 165.675 75.5 149.675C75.5 133.675 74.5272 125.98 79 104.175C83.0001 84.6748 79 68.1748 64 48.6748Z"
          fill={color}
        />
      </svg>
      <svg
        className="hair_shadow"
        height="105"
        viewBox="0 0 124 105"
        width="124"
      >
        <path
          d="M0 58.1749L7 23.6749L85.5 0.174896L123.5 23.6749V85.6749L74.5 104.175L7 85.6749L0 58.1749Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

LongAndVoluminous.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LongAndVoluminous;
