/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';

import { Preview, Root } from './styles';

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
        <div key={clothesId} onClick={() => setClothes(clothesId)}>
          <Preview
            alt={clothesId}
            isSelected={clothesId === clothes}
            src={require(`./assets/${clothesId}.png`)}
          />
        </div>
      ))}
    </Root>
  );
};

ClothesOption.propTypes = {
  clothes: PropTypes.string.isRequired,
  setClothes: PropTypes.func.isRequired,
};

export default ClothesOption;
