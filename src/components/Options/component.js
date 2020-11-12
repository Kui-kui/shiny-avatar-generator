import PropTypes from 'prop-types';
import React from 'react';

import ClothesColorOption from './ClothesColorOption';
import ClothesOption from './ClothesOption';
import HairColorOption from './HairColorOption';
import HaircutOption from './HaircutOption';
import SkinColorOption from './SkinColorOption';
import Styled from './styles';

const Options = ({
  clothes,
  colors,
  haircut,
  onColorChange,
  setClothes,
  setHaircut,
  toggledOption,
}) => {
  const getOption = () => {
    switch (toggledOption) {
      case 'SKIN_COLOR':
        return (
          <SkinColorOption
            color={colors.body}
            isOpen={toggledOption === 'SKIN_COLOR'}
            onColorChange={onColorChange('body')}
          />
        );
      case 'HAIRCUT':
        return (
          <HaircutOption
            haircut={haircut}
            isOpen={toggledOption === 'HAIRCUT'}
            setHaircut={setHaircut}
          />
        );
      case 'HAIR_COLOR':
        return (
          <HairColorOption
            color={colors.body}
            isOpen={toggledOption === 'HAIR_COLOR'}
            onColorChange={onColorChange('hair')}
          />
        );
      case 'CLOTHES':
        return (
          <ClothesOption
            clothes={clothes}
            isOpen={toggledOption === 'CLOTHES'}
            setClothes={setClothes}
          />
        );
      case 'CLOTHES_COLOR':
        return (
          <ClothesColorOption
            color={colors.body}
            isOpen={toggledOption === 'CLOTHES_COLOR'}
            onColorChange={onColorChange('clothes')}
          />
        );
      default:
        return null;
    }
  };

  const option = getOption();
  return <Styled>{option}</Styled>;
};

Options.propTypes = {
  clothes: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    body: PropTypes.string.isRequired,
    clothes: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
  }).isRequired,
  haircut: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  setClothes: PropTypes.func.isRequired,
  setHaircut: PropTypes.func.isRequired,
  toggledOption: PropTypes.string.isRequired,
};

export default Options;
