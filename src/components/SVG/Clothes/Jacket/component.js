import React from 'react';
import PropTypes from 'prop-types';

import Color from 'color';
import Styled from './styles';

const Jacket = ({ color }) => {
  const shadowColor = Color(color).darken(0.1).hex();

  return (
    <Styled>
      <svg className="clothes" height="164" viewBox="0 0 318 164" width="318">
        <path
          d="M183.928 3.1778C177.841 22.6586 153.846 25.485 140.627 9.83078L132.974 0.786122C132.974 0.786122 116.798 0.0903844 107.927 2.17761C82.1848 8.09142 0 45.6228 0 163.764C65.7481 163.764 317.346 163.764 317.346 163.764C292.473 14.527 183.928 3.1778 183.928 3.1778Z"
          fill={color}
        />
      </svg>
      <svg
        className="clothes_button clothes_button1"
        height="22"
        viewBox="0 0 22 22"
        width="22"
      >
        <circle cx="11" cy="11" fill={shadowColor} r="11" />
      </svg>
      <svg
        className="clothes_button clothes_button2"
        height="22"
        viewBox="0 0 22 22"
        width="22"
      >
        <circle cx="11" cy="11" fill={shadowColor} r="11" />
      </svg>
      <svg
        className="clothes_button clothes_button3"
        height="5"
        viewBox="0 0 20 5"
        width="20"
      >
        <path
          d="M19.2785 5.08899C17.3251 2.02905 13.8995 0 10 0C6.10057 0 2.67499 2.02905 0.721558 5.08899H19.2785Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

Jacket.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Jacket;
