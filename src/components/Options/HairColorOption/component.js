import PropTypes from 'prop-types';
import React from 'react';

import ColorPicker from '../../core/ColorPicker';

const HAIR_COLORS = ['#FFD947', '#F0C014', '#C26604', '#17294D'];

const HairColorOption = ({ color, onColorChange }) => {
  return (
    <ColorPicker
      colors={HAIR_COLORS}
      onColorChange={onColorChange}
      selectedColor={color}
    />
  );
};

HairColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default HairColorOption;
