import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';

import Dropdown from '../core/Dropdown';
import Styled, { pickerStyle } from './styles';

const CLOTHES_COLORS = [
  '#FFD947',
  '#DAB0FF',
  '#FEA99A',
  '#A2C7FF',
  '#458FFF',
  '#4B5FFA',
  '#17294C',
];

const ClothesColorOption = ({ color, onColorChange, isOpen, toggle }) => {
  return (
    <Styled isOpen={isOpen}>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="Clothes color"
        toggle={toggle}
      >
        <CirclePicker
          colors={CLOTHES_COLORS}
          hex={color}
          onChangeComplete={onColorChange}
          styles={pickerStyle}
          width={196}
        />
      </Dropdown>
    </Styled>
  );
};

ClothesColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onColorChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ClothesColorOption;
