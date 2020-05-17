import Color from 'color';
import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const BobCutWithBangs = ({ color }) => {
  const shadowColor = Color(color).darken(0.3).hex();
  return (
    <Styled>
      <svg
        className="hair_left"
        fill="none"
        height="211"
        viewBox="0 0 162 211"
        width="162"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 78C82.4 90 142.5 77 161.5 69C136.5 -25 37.5 -11.5 15 44.5C-0.259352 82.479 -3.49996 188.545 6.00003 201.5C11.5 209 27 212 52 209C46 187.5 65 117 52 78Z"
          fill={color}
        />
      </svg>
      <svg
        className="hair_right"
        fill="none"
        height="172"
        viewBox="0 0 85 172"
        width="85"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82 168C74 174.5 57 169.5 50.5 168C56.1 156 62.1667 82.5 61.5 72L0.5 64.5001L0.621937 64.3218C15.8451 42.0724 49.1331 -6.57971 61.5 0.99999C77 10.5 90 161.5 82 168Z"
          fill={color}
        />
      </svg>
      <svg
        className="hair_shadow"
        fill="none"
        height="90"
        viewBox="0 0 119 90"
        width="119"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99995 37C6.49995 27.5 18.4999 21.5 32.4999 18C50.3333 11.6667 89.2 -0.599997 102 1C118 3 118.5 61 118.5 74C118.5 87 89 89.5 78.5 89.5C68 89.5 13.4999 80 4.99995 70.5C-3.50005 61 3.49995 46.5 4.99995 37Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

BobCutWithBangs.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BobCutWithBangs;
