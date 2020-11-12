import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from '../Thumbnail';

import { Root } from './styles';

const ColorPicker = ({ colors, onColorChange, selectedColor }) => {
  return (
    <Root>
      {colors.map((color) => (
        <Thumbnail
          key={color}
          color={color}
          isSelected={color === selectedColor}
          onClick={() => onColorChange(color)}
        />
      ))}
    </Root>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default ColorPicker;
