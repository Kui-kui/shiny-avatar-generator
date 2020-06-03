import React from 'react';
import PropTypes from 'prop-types';

import Color from 'color';
import Styled from './styles';

const Cardigan = ({ color }) => {
  const shadowColor = Color(color).darken(0.1).hex();
  return (
    <Styled>
      <svg className="clothes" height="163" viewBox="0 0 318 163" width="318">
        <path
          d="M225.458 163.089H317.346C292.473 13.8522 183.928 2.503 183.928 2.503C182.816 6.06359 181.105 9.06781 178.971 11.5045C211.464 49.9511 223.156 128.19 225.458 163.089ZM145.727 13.941C143.908 12.6029 142.192 11.0089 140.627 9.15598L132.974 0.111317C132.974 0.111317 116.798 -0.58442 107.927 1.50281C82.1848 7.41662 0 44.948 0 163.089H151.343C137.061 118.78 130.472 49.3097 145.727 13.941Z"
          fill={color}
        />
      </svg>
      <svg className="jumper" height="47" viewBox="0 0 89 47" width="89">
        <path
          d="M86.5 3.00006C65.7 18.6001 14.1667 19.5001 -9 18.0001L-1 121L113.5 106C113.167 65.1667 107.3 -12.5999 86.5 3.00006Z"
          fill={shadowColor}
        />
      </svg>
    </Styled>
  );
};

Cardigan.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Cardigan;
