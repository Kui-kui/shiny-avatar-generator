import PropTypes from 'prop-types';
import React from 'react';
import ColorPicker from '../core/ColorPicker';
import ImagePicker from '../core/ImagePicker/component';

import Styled from './styles';
import {
  CLOTHES_COLORS,
  CLOTHES_IDS,
  HAIRCUT_IDS,
  HAIR_COLORS,
  SKIN_COLORS,
} from './utils';

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
          <ColorPicker
            colors={SKIN_COLORS}
            onColorChange={onColorChange('body')}
            selectedColor={colors.body}
          />
        );
      case 'HAIRCUT':
        return (
          <ImagePicker
            images={HAIRCUT_IDS}
            onClick={setHaircut}
            pathPrefix="haircut"
            selectedImage={haircut}
          />
        );
      case 'HAIR_COLOR':
        return (
          <ColorPicker
            colors={HAIR_COLORS}
            onColorChange={onColorChange('hair')}
            selectedColor={colors.hair}
          />
        );
      case 'CLOTHES':
        return (
          <ImagePicker
            images={CLOTHES_IDS}
            onClick={setClothes}
            pathPrefix="clothes"
            selectedImage={clothes}
          />
        );
      case 'CLOTHES_COLOR':
        return (
          <ColorPicker
            colors={CLOTHES_COLORS}
            onColorChange={onColorChange('clothes')}
            selectedColor={colors.clothes}
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
