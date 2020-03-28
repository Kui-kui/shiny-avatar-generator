import Color from 'color';
import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const Body = ({ color }) => {
  const shadowColor = Color(color).darken(0.1).hex();

  return (
    <Styled>
      <svg
        className="torso"
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
      <svg
        className="neck"
        fill="none"
        height="109"
        viewBox="0 0 61 109"
        width="61"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3828 7.7092L0.989197 59.8899L11.4253 73.6308L39.255 108.418L56.6486 84.0669L57.3443 47.1926L60.1273 11.1879L32.2976 0.75177L18.3828 7.7092Z"
          fill={color}
        />
      </svg>
      <svg
        className="neck-shadow"
        fill="none"
        height="42"
        viewBox="0 0 52 42"
        width="52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M0.822205 30.3909L9.38278 4.70918L18.4743 0.163422L34.6913 2.02439L51.1273 8.18789L48.774 38.6342C22.4097 45.0774 7.37648 37.625 0.822205 30.3909Z"
          fill={shadowColor}
          fillRule="evenodd"
        />
      </svg>
      <svg
        className="head"
        fill="none"
        height="172"
        viewBox="0 0 142 172"
        width="142"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10.5513 109.55C19.7438 142.521 46.7102 161.406 78.1159 164.092C99.2423 167.145 145.371 131.406 130.97 61.7284C121.433 15.3285 99.8001 -2.71127 66.4181 7.57322L8.05163 38.2875L10.5513 109.55Z"
          fill={color}
          fillRule="evenodd"
        />
      </svg>
      <svg
        className="nose"
        fill="none"
        height="21"
        viewBox="0 0 17 21"
        width="17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2342 10.68C9.02296 7.8259 5.85092 3.21151 4.46275 0.482931L0.977564 20.2492C3.84768 20.929 9.55067 21.0623 14.6521 18.0707C17.3791 16.4715 15.8511 12.4536 13.2342 10.68Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

Body.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Body;
