import PropTypes from 'prop-types';
import React from 'react';

import ColorPicker from '../../core/ColorPicker';

const CLOTHES_COLORS = [
  '#FFD947',
  '#DAB0FF',
  '#FEA99A',
  '#A2C7FF',
  '#458FFF',
  '#4B5FFA',
  '#17294C',
];

const ClothesColorOption = ({ color, onColorChange }) => {
  return (
    <ColorPicker
      colors={CLOTHES_COLORS}
      onColorChange={onColorChange}
      selectedColor={color}
    />
  );
};

ClothesColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ClothesColorOption;
