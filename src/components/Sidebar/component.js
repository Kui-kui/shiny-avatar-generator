import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import ColorOption from '../ColorOption';
import ClothesColorOption from '../ClothesColorOption';
import SkinColorOption from '../SkinColorOption';
import Separator from '../core/Separator';
import Styled from './styles';

const Sidebar = ({ colors, onChange }) => {
  const [toggledOption, setToggledOption] = useState('');
  const toggle = useCallback(
    (option) => {
      if (option === toggledOption) {
        setToggledOption('');
      } else {
        setToggledOption(option);
      }
    },
    [toggledOption, setToggledOption],
  );
  return (
    <Styled>
      <p className="headline">Shiny Avatar Generator</p>
      <SkinColorOption
        color={colors.body}
        isOpen={toggledOption === 'SKIN'}
        onChange={onChange('body')}
        toggle={() => toggle('SKIN')}
      />
      <Separator />
      <ClothesColorOption
        color={colors.body}
        isOpen={toggledOption === 'CLOTHES'}
        onChange={onChange('clothes')}
        toggle={() => toggle('CLOTHES')}
      />
      <Separator />
      <ColorOption
        color={colors.hair}
        label="Hair color"
        onChange={onChange('hair')}
      />
    </Styled>
  );
};

Sidebar.propTypes = {
  colors: PropTypes.shape({
    body: PropTypes.string.isRequired,
    clothes: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sidebar;
