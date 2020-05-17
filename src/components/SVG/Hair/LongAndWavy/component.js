import Color from 'color';
import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const LongAndWavy = ({ color }) => {
  const shadowColor = Color(color).darken(0.3).hex();
  return (
    <Styled>
      <svg className="hair" height="345" viewBox="0 0 231 345" width="231">
        <path
          d="M75 55.5C85.8 49.5 97.3333 38.6667 102 33C88.5 13.5 144 1.50001 92 1.5C40 1.49999 15.5 100 15.5 120C15.5 140 14.5 170.5 15.5 194.5C16.5 218.5 -4.00001 230 8.49998 269.5C15.3152 291.036 -6.00002 374 1.99996 359.5C5.59066 352.992 86 374.5 86 369C86 363.5 55.5 336.5 60.5 317C65.5 297.5 86.5 252.5 86 235C85.5 217.5 75 206.5 75 190.5V134C75 114 69 104 65 92C61 80 61.5 63 75 55.5Z"
          fill={color}
        />
        <path
          d="M159 41.5C147 25.9 118.333 28.6667 105.5 32C98.6666 24 88.2493 2.65421 105.5 1.00004C178.5 -5.99997 191 43.0001 199.5 76.5001C208 110 196.314 140.488 209.5 156.5C230.5 182 230 220 230.5 245.5C221 230.5 194 221.5 178.5 211C163 200.5 168.5 166 168.5 150C168.5 134 167.527 126.305 172 104.5C176 85 174 61 159 41.5Z"
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
          d="M0 58.5001L7 24.0001L85.5 0.500122L123.5 24.0001V86.0001L74.5 104.5L7 86.0001L0 58.5001Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

LongAndWavy.propTypes = {
  color: PropTypes.string.isRequired,
};

export default LongAndWavy;
