import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

import Styled from './styles';

const ColorOption = ({ color, label, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <>
      <Styled color={color}>
        <p className="label">{label}</p>
        <div
          className="color-container"
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
        >
          <div className="color-preview" />
        </div>
        {displayColorPicker ? (
          <SketchPicker
            className="picker"
            color={color}
            onChangeComplete={onChange}
          />
        ) : null}
      </Styled>
    </>
  );
};

ColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorOption;
