import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';

import Dropdown from '../core/Dropdown';
import Styled, { pickerStyle } from './styles';

const CLOTHES_COLORS = [
  '#A8DEFF',
  '#99FBE6',
  '#FFEB9F',
  '#FFD39F',
  '#FBB59D',
  '#DAB0FF',
  '#A8BAFF',
];

const ClothesColorOption = ({ color, onChange, isOpen, toggle }) => {
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
          onChangeComplete={onChange}
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
  onChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ClothesColorOption;
