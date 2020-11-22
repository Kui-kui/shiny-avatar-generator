import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { LandingContext } from '../../common/context';
import ColorPicker from '../core/ColorPicker';
import ImagePicker from '../core/ImagePicker/component';
import Styled from './styles';
import {
  BEARD_IDS,
  CLOTHES_COLORS,
  CLOTHES_IDS,
  HAIRCUT_IDS,
  HAIR_COLORS,
  SKIN_COLORS,
} from './utils';

const Options = ({ toggledOption }) => {
  const {
    beard,
    clothes,
    colors,
    haircut,
    setBeard,
    setClothes,
    setColor,
    setHaircut,
  } = useContext(LandingContext);

  const getOption = () => {
    switch (toggledOption) {
      case 'SKIN_COLOR':
        return (
          <ColorPicker
            colors={SKIN_COLORS}
            onColorChange={setColor('body')}
            selectedColor={colors.body}
          />
        );
      case 'BEARD':
        return (
          <ImagePicker
            images={BEARD_IDS}
            onClick={setBeard}
            pathPrefix="beard"
            selectedImage={beard}
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
            onColorChange={setColor('hair')}
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
            onColorChange={setColor('clothes')}
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
  toggledOption: PropTypes.string.isRequired,
};

export default Options;
