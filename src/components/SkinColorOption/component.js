import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';

import Dropdown from '../core/Dropdown';
import Styled, { pickerStyle } from './styles';

const SKIN_COLORS = ['#FFE9D0', '#F7D2A7', '#C26604'];

const SkinColorOption = ({ color, onChange, isOpen, toggle }) => {
  return (
    <Styled>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="Skin color"
        toggle={toggle}
      >
        <CirclePicker
          colors={SKIN_COLORS}
          hex={color}
          onChangeComplete={onChange}
          styles={pickerStyle}
          width={196}
        />
      </Dropdown>
    </Styled>
  );
};

SkinColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SkinColorOption;
