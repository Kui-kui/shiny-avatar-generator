import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import ClothesColorOption from '../ClothesColorOption';
import ClothesOption from '../ClothesOption';
import HairColorOption from '../HairColorOption';
import HaircutOption from '../HaircutOption';
import SkinColorOption from '../SkinColorOption';
import Separator from '../core/Separator';
import Styled from './styles';

const Sidebar = ({
  clothes,
  colors,
  haircut,
  onColorChange,
  setClothes,
  setHaircut,
}) => {
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
        isOpen={toggledOption === 'SKIN_COLOR'}
        onColorChange={onColorChange('body')}
        toggle={() => toggle('SKIN_COLOR')}
      />
      <Separator />
      <HaircutOption
        haircut={haircut}
        isOpen={toggledOption === 'HAIRCUT'}
        setHaircut={setHaircut}
        toggle={() => toggle('HAIRCUT')}
      />
      <Separator />
      <HairColorOption
        color={colors.body}
        isOpen={toggledOption === 'HAIR_COLOR'}
        onColorChange={onColorChange('hair')}
        toggle={() => toggle('HAIR_COLOR')}
      />
      <Separator />
      <ClothesOption
        clothes={clothes}
        isOpen={toggledOption === 'CLOTHES'}
        setClothes={setClothes}
        toggle={() => toggle('CLOTHES')}
      />
      <Separator />
      <ClothesColorOption
        color={colors.body}
        isOpen={toggledOption === 'CLOTHES_COLOR'}
        onColorChange={onColorChange('clothes')}
        toggle={() => toggle('CLOTHES_COLOR')}
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
  clothes: PropTypes.string.isRequired,
  haircut: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  setClothes: PropTypes.func.isRequired,
  setHaircut: PropTypes.func.isRequired,
};

export default Sidebar;
