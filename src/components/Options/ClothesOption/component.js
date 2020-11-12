/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from '../../core/Thumbnail';

import { Root } from './styles';

const CLOTHES_IDS = [
  'SWEATER',
  'TANK_TOP',
  'STRIPED_JERSEY',
  'CARDIGAN',
  'FLOWERY_TEE',
  'TEE',
  'JACKET',
];

const ClothesOption = ({ clothes, setClothes }) => {
  return (
    <Root>
      {CLOTHES_IDS.map((clothesId) => (
        <Thumbnail
          key={clothesId}
          imgSrc={require(`./assets/${clothesId}.png`)}
          isSelected={clothesId === clothes}
          onClick={() => setClothes(clothesId)}
        />
      ))}
    </Root>
  );
};

ClothesOption.propTypes = {
  clothes: PropTypes.string.isRequired,
  setClothes: PropTypes.func.isRequired,
};

export default ClothesOption;
