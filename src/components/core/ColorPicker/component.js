import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';
import useWindowSize from '../../../hooks/useWindowSize';

import Styled, { pickerStyle } from './styles';

const ColorPicker = ({ colors, onColorChange, selectedColor }) => {
  const { width } = useWindowSize();
  return (
    <Styled>
      <CirclePicker
        circleSize={56}
        colors={colors}
        hex={selectedColor}
        onChangeComplete={onColorChange}
        styles={pickerStyle}
        width={width}
      />
    </Styled>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default ColorPicker;
