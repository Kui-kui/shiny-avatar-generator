import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import ClothesColorOption from '../ClothesColorOption';
import HairColorOption from '../HairColorOption';
import SkinColorOption from '../SkinColorOption';
import Separator from '../core/Separator';
import Styled from './styles';

const Sidebar = ({ colors, haircut, onColorChange, setHaircut }) => {
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
        onColorChange={onColorChange('body')}
        toggle={() => toggle('SKIN')}
      />
      <Separator />
      <ClothesColorOption
        color={colors.body}
        isOpen={toggledOption === 'CLOTHES'}
        onColorChange={onColorChange('clothes')}
        toggle={() => toggle('CLOTHES')}
      />
      <Separator />
      <HairColorOption
        color={colors.body}
        haircut={haircut}
        isOpen={toggledOption === 'HAIR'}
        onColorChange={onColorChange('hair')}
        setHaircut={setHaircut}
        toggle={() => toggle('HAIR')}
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
  haircut: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  setHaircut: PropTypes.func.isRequired,
};

export default Sidebar;
