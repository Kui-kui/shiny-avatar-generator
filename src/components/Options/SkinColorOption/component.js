import PropTypes from 'prop-types';
import React from 'react';

import ColorPicker from '../../core/ColorPicker';

const SKIN_COLORS = ['#FFE9D0', '#F7D2A7', '#C26604'];

const SkinColorOption = ({ color, onColorChange }) => {
  return (
    <ColorPicker
      colors={SKIN_COLORS}
      onColorChange={onColorChange}
      selectedColor={color}
    />
  );
};

SkinColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default SkinColorOption;
