import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';

import Dropdown from '../core/Dropdown';
import Styled, { pickerStyle } from './styles';

const HAIR_COLORS = ['#FFD947', '#F0C014', '#FFA238', '#C26604', '#17294D'];

const HairColorOption = ({ color, onColorChange, isOpen, toggle }) => {
  return (
    <Styled isOpen={isOpen}>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="Hair color"
        toggle={toggle}
      >
        <CirclePicker
          colors={HAIR_COLORS}
          hex={color}
          onChangeComplete={onColorChange}
          styles={pickerStyle}
          width={196}
        />
      </Dropdown>
    </Styled>
  );
};

HairColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onColorChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default HairColorOption;
